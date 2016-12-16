var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PlayersNTeamsDB');

mongoose.Promise = global.Promise;

var fs = require('fs');
var path = require('path');
var models_path = path.join(__dirname, './../models');

require(models_path + '/playersModel');
require(models_path + '/teamsModel');
