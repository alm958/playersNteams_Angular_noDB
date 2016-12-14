

app.get('/players', playersController.index);
app.post('/players/create', playersController.create);
app.delete('/players/:id', playersController.delete);
app.put('/players/:id', playersController.update);

app.get('/teams', teamsController.index);
app.post('/teams/create', teamsController.create);
app.delete('/teams/:id', teamsController.delete);
