module.exports = (cfg) => {
  const table = require("./table.js")(cfg);
  cfg.addShortcode("table", table);
};
