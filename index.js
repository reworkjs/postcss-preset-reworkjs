/* eslint-disable import/no-commonjs */

module.exports = function genPostCssConfig(ctx) {

  return {
    parser: 'postcss-scss',
    map: ctx.env === 'development' ? ctx.map : false,
    plugins: {
      'postcss-focus': {},
      'postcss-reporter': {
        clearMessages: true,
      },
      'postcss-cssnext': {},
    },
  };
};
