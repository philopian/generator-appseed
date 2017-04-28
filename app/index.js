// 'use strict';
var _ = require('lodash');
var fs = require('fs');
var chalk = require('chalk');
var yosay = require('yosay');
var generators = require('yeoman-generator');
var greeting = require('../ascii-art-greeting');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
  },

  // INITLALIZING
  initlalizing: function() {
    // console.log("...initlalizing");
  },


  // PROMPT USER WITH SOME QUESTIONS
  prompting: function() {

  },


  // CONFIGURE
  configuring: function() {
    // console.log("...configuring");
  },


  // DEFAULTS
  default: function() {
    // console.log("...default");
  },


  // CREATE/WRITE/COPY TEMPLATE FILES
  writing: {

  },

  // WHAT TO DO WITH CONFLICTS
  conflicts: function() {
    // console.log("...conflicts");
  },


  // INSTALL BOWER/NPM PACKAGES
  install: function() {
    // console.log("...install");
  },


  // TELL USER EVERYTHING IS COMPLETED
  end: function() {

  }

});