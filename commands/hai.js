import { CommandInteraction } from "discord.js";
/**
 * this is a test command
 * that's it
 * @param {CommandInteraction} interaction
 */


export const run = async interaction => {
  return await interaction.reply({
    content: `hai`
  });
};


export const data = {
  name: `hai`,
  description: `hewwo`
};