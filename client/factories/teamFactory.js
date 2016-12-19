app.factory('teamFactory', ['$http', function($http){
    var tFactory = {};
    tFactory.teamlist = [];
    tFactory.addTeam = function(team, callback){
        $http.post('/teams', team)
            .then(function(teamadded){
                tFactory.teamlist.push(teamadded);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    tFactory.getTeams = function(callback){
        console.log('in getTeams');
        $http.get('/teams')
            .then(function(teams){
                tFactory.teamlist = teams.data;
                callback(tFactory.teamlist)
            })
            .catch(function(err){
                console.log(err);
            });
    }
    tFactory.delTeam = function(id, callback){
        console.log('in delTeam');
        $http.delete(`/teams/${id}`)
            .then(function(response){
                console.log(response);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    return tFactory;
}])
