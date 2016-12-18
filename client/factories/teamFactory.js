app.factory('teamFactory', ['$http', function($http){
    var tFactory = {};
    tFactory.teamlist = [];
    tFactory.addTeam = function(team){
        $http.post('/teams', team)
            .then(function(teamadded){
                tFactory.teamlist.push(teamadded);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    tFactory.getTeams = function(callback){
        $http.get('/teams')
            .then(function(teams){
                tFactory.teamlist = teams.data;
                callback(tFactory.teamlist)
            })
            .catch(function(err){
                console.log(err);
            });
    }
    tFactory.delTeam = function(id){
        $http.delete(`/teams/${id}`)
            .then(function(response){
                console.log(response);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    return tFactory;
}])
