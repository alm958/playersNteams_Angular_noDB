app.factory('playerFactory', ['$http', function($http){
    var pFactory = {};
    pFactory.playerlist = [];
    pFactory.addPlayer = function(player){
        $http.post('/players', player)
            .then(function(playeradded){
                pFactory.playerlist.push(playeradded);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    pFactory.getPlayers = function(callback){
        $http.get('/players')
            .then(function(players){
                console.log(players);
                pFactory.playerlist = players.data;
                console.log(pFactory.playerlist);
                callback(pFactory.playerlist);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    pFactory.delPlayer = function(id){
        $http.delete(`/players/${id}`)
            .then(function(response){
                console.log(response);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    pFactory.updatePlayer = function(id){
        $http.put(`/players/${id}`)
            .then(function(updatedPlayer){
                console.log(updatedPlayer);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    pFactory.AddPtoTeam = function(pName, team){
        var updateIndex = pFactory.playerlist.findIndex(x => x.name === pName);
        console.log(updateIndex);
        pFactory.playerlist[updateIndex].team = team;
        console.log(pFactory.playerlist[updateIndex]);
    }
    pFactory.getSPlayers = function(callback){
        var SPlayers = pFactory.playerlist.filter(x => !(typeof x.team === "undefined" ));
        console.log(SPlayers);
        callback(SPlayers)
    }
    pFactory.getUSPlayers = function(callback){
        var USPlayers = pFactory.playerlist.filter(x => (typeof x.team === "undefined" ));
        console.log(USPlayers);
        callback(USPlayers)
    }
    pFactory.cut = function(pNum){
        var cutIndex = pFactory.playerlist.findIndex(x => x.pNum === Number(pNum));
        delete pFactory.playerlist[cutIndex].team;
    }
    pFactory.liquidate = function(tName){
        console.log(tName);
        var disbandedPlayers = pFactory.playerlist.filter(x => (x.team === tName ));
        console.log(disbandedPlayers);
        for (var i = 0; i < disbandedPlayers.length; i++){
            console.log(disbandedPlayers[i]);
            delete disbandedPlayers[i].team;
        };
    }
    return pFactory;
}])
