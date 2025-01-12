const outreachTemplate= require("./templates/WebsiteOutreach");

const getOutreachTemplate = (name, optionalBody) => {
  return outreachTemplate(name, optionalBody);
};

module.exports = getOutreachTemplate;
