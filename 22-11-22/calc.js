module.exports = {
  sum: function (...args) {
    let res = 0;
    for (n of args) res += parseInt(n);
    return res;
  },
  sub: function (...args) {
    let res = args[0];
    for (let i = 1; i < args.length; i++) res -= args[i];
    return res;
  },

  mul: function (...args) {
    let res = 1;
    for (n of args) res *= n;
    return res;
  },

  dev: function (...args) {
    let res = args[0];
    for (let i = 1; i < args.length; i++) res /= parseInt(args[i]);
    return res;
  },
};
