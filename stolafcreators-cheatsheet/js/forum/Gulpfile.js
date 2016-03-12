var flarum = require('flarum-gulp');

flarum({
  modules: {
    'stolafcreators/cheatsheet': [
      'src/**/*.js'
    ]
  }
});