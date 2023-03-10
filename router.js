var _ = require("underscore");
var url = require('url'),
    path = require('path'),
    fs = require('fs-extra'),
    marked = require('marked');

const
  settings  = require('./content/settings.js'),
  api = require('./bin/api')
;

var projectTitle = settings.title;
var contentFolder = settings.folder;


module.exports = function(app,io,m){

  app.get("/", getIndex);
  app.get("/:poster", getPoster);
  app.get("/:poster/print", getPrint);
  app.get("/:poster/pdf", getPdf);

  function getIndex(req, res) {
    var dataToSend = {
      "appName": projectTitle,
      "contentFolder":contentFolder
    }
    res.render("index", dataToSend);

  };

  function getPoster(req, res) {
    var slugConfName = req.params;
    //var slugConfName = settings.blockFolder;
    api.readConfMeta(slugConfName.poster).then(function(c) {
      var pageTitle = c.name + ' | ' + projectTitle;
      res.render("poster", {
        "confName" : c.name,
        "title" : pageTitle,
        "appName" : projectTitle,
        "slugConfName" : slugConfName.poster,
        "contentFolder":contentFolder,
        "settings" : settings,
      });

    });

  };

  function getPrint(req, res) {
    var slugConfName = req.params;
    api.readConfMeta(slugConfName.poster).then(function(c) {

      var pageTitle = c.name + ' | ' + projectTitle;
      res.render("print", {
        "confName" : c.name,
        "title" : pageTitle,
        "appName" : projectTitle,
        "slugConfName" : slugConfName.poster,
        "contentFolder":contentFolder,
        "settings" : settings,
      });

    });
  };

  function getPdf(req, res) {
    var slugConfName = req.params;
      var pageTitle = 'PDF';
      res.render("pdf", {
        "title" : pageTitle,
      });
  };


};

