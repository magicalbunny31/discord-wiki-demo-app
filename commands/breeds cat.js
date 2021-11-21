import { CommandInteraction } from "discord.js";
/**
 * example for autocomplete "loading choices failed"
 * @param {CommandInteraction} interaction
 */


export const run = async interaction => {
  return await interaction.reply({
    content: `hai`
  });
};