import { readdirSync } from "fs";


import dotenv from "dotenv";
dotenv.config();


import fuzzysort from "fuzzysort";


// a bot user is used bot interactions will *only* be used
import Discord from "discord.js";
const client = new Discord.Client({
  intents: [],

  presence: {
    status: `invisible`
  }
});


client.once(`ready`, async client => {
  // Array<ApplicationCommandData>
  // https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandData
  const commands = (
    await Promise.all(
      readdirSync(`./commands`)
        .map(async command => (await import(`./commands/${command}`))?.data)
    )
  ).filter(Boolean); // some files may not contain data, indicating that it's a subcommand
  await client.application.commands.set(commands, process.env.GUILD);

  // when the fox is logged, we're pretty much ready!
  return console.log(`🦊`);
});


client.on(`interactionCreate`, async interaction => {
  const subcommandGroup = interaction.options.getSubcommandGroup(false);
  const subcommand      = interaction.options.getSubcommand(false);
  const commandName     = interaction.commandName;

  // logical OR won't work here because dynamic imports will throw, use ternary instead (so i will look smarter)
  const command =
    subcommandGroup
      ? await import(`./commands/${commandName} ${subcommandGroup} ${subcommand}.js`)
      : subcommand
        ? await import(`./commands/${commandName} ${subcommand}.js`)
        : await import(`./commands/${commandName}.js`);


  if (interaction.isApplicationCommand()) { // chat-input commands (aka slash commands)
    return await command.run(interaction);


  } else if (interaction.isAutocomplete()) { // autocomplete interactions
    if (!command.autocomplete) return;

    const input = interaction.options.getFocused();
    const choices = await command.autocomplete(interaction);

    const sortedChoices = fuzzysort.go(input, choices, {
      threshold: -Infinity,
      limit: 25,
      allowTypo: true,
      keys: [ `name`, `value` ]
    }).map(choice => choice.obj);

    if (input) return await interaction.respond(sortedChoices);
    else       return await interaction.respond(choices.slice(0, 25));
  } else return;
});


client.login(process.env.TOKEN);