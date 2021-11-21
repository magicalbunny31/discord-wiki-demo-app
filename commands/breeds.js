/**
 * subcommand file for "/breeds cat", "/breeds dog"
 *
 */


 export const data = {
  name: `breeds`,
  description: `animal breeds 🐶🐱`,
  options: [{
    type: `SUB_COMMAND`,
    name: `dog`,
    description: `dog info`,
    options: [{
      type: `STRING`,
      name: `breed`,
      description: `dog species to find info on 🔎`,
      required: true,
      autocomplete: true
    }]
  }, {
    type: `SUB_COMMAND`,
    name: `cat`,
    description: `cat info`,
    options: [{
      type: `STRING`,
      name: `breed`,
      description: `cat species to find info on 🔎`,
      required: true,
      autocomplete: true
    }]
  }]
};