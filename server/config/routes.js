var playersController = require('./../controllers/playersCont.js');
var teamsController = require('./../controllers/teamsCont.js');

module.exports = function(app){

    app.get('/players', playersController.index);
    app.post('/players', playersController.create);
    app.delete('/players/:id', playersController.delete);
    app.put('/players/:id', playersController.update);
    app.get('/players/unsigned', playersController.indexUnsigned);
    app.get('/players/signed', playersController.indexSigned);
    app.put('/players/:pId/:tId', playersController.addTeam);
    //need route for removing team attribute from players when a team is deleted

    app.get('/teams', teamsController.index);
    app.post('/teams', teamsController.create);
    app.delete('/teams/:id', teamsController.delete);
    // app.put('/teams/:id', teamsController.update);

};
