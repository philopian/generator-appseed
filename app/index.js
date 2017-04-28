// 'use strict';
var _ = require('lodash');
var fs = require('fs');
var chalk = require('chalk');
var generators = require('yeoman-generator');
var greeting = require('../ascii-art-greeting');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
  },

  initlalizing: function() {},

  prompting: function() {
    console.log(greeting.logo);
    var done = this.async();
    this.prompt([{
        type: 'input',
        name: 'appName',
        message: 'Give your app a name!',
        store: true
      }, ],
      function(answers) {
        this.answers = answers;
        done();
      }.bind(this));
  },

  configuring: function() {
    console.log("...configuring");
    console.log(this.answers);
  },

  default: function() {
    console.log("...default");
  },

  writing: {
    copyDirectory() {
      this.directory('appseed1.0.2/', './');
    },
    templateFiles: function() {
      this.fs.copyTpl(
        this.templatePath('appseed1.0.2_templates/index.html'),
        this.destinationPath('www/index.html'), {
          AppName: this.answers.appName
        }
      );
    }
  },

  conflicts: function() {},

  install: function() {
    var shelljs = require('shelljs');
    var cmd = "bower i && yarn";
    shelljs.exec(cmd)
  },

  end: function() {
    console.log('...DONE');
  }
});