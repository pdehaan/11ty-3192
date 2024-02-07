module.exports = function (cfg = {}) {
  const foo = cfg.getFilter("getFoo");
  return function (phrase = "") {
    return `<table><tbody><tr><td>${foo(phrase)}</td></tr></tbody></table>`;
  };
};
