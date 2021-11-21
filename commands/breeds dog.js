import { CommandInteraction } from "discord.js";
/**
 * example of autocomplete
 * @param {CommandInteraction} interaction
 */


export const run = async interaction => {
  return await interaction.reply({
    content: `hai`
  });
};


export const autocomplete = async interaction => {
  return [{
    name: `bulldog`,
    value: `bulldog`
  }, {
    name: `labrador retriever`,
    value: `labrador retriever`
  }, {
    name: `german shepherd`,
    value: `german shepherd`
  }, {
    name: `golden retriever`,
    value: `golden retriever`
  }, {
    name: `poodle`,
    value: `poodle`
  }, {
    name: `chihuahua`,
    value: `chihuahua`
  }, {
    name: `boxer`,
    value: `boxer`
  }, {
    name: `yorkshire terrier`,
    value: `yorkshire terrier`
  }, {
    name: `bernese mountain dog`,
    value: `bernese mountain dog`
  }, {
    name: `french bulldog`,
    value: `french bulldog`
  }, {
    name: `siberian husky`,
    value: `siberian husky`
  }, {
    name: `dachshund`,
    value: `dachshund`
  }, {
    name: `australian shepherd`,
    value: `australian shepherd`
  }, {
    name: `bichon frise`,
    value: `bichon frise`
  }, {
    name: `english cocker spaniel`,
    value: `english cocker spaniel`
  }, {
    name: `pomeranian`,
    value: `pomeranian`
  }, {
    name: `great dane`,
    value: `great dane`
  }, {
    name: `border collie`,
    value: `border collie`
  }];
};