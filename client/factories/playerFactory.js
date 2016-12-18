app.factory('playerFactory', ['$http', function($http){
    var pFactory = {};
    pFactory.playerlist = [];
    pFactory.USPlist = [];
    pFactory.SPlist = [];
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
                pFactory.playerlist = players.data;
                callback(pFactory.playerlist)
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
    pFactory.updatePlayer = function(player, callback){
        $http.put(`/players/${player._id}`, player)
            .then(function(response){
                var player = response.data;
                var updateIndex = pFactory.playerlist.findIndex(x => x._id === player._id);
                if (updateIndex > -1) {
                 pFactory.playerlist[updateIndex] = player;
                 callback(player);
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }
    pFactory.findPlayer = function(id) {
      return pFactory.playerlist.find(player => player._id === id);
    };
    pFactory.AddPtoTeam = function(pId, tId){
        $http.put(`/players/${pId}/${tId}`)
            .then(function(response){
                console.log(response);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    pFactory.getSPlayers = function(callback){
        $http.get('/players/signed')
            .then(function(SPlayers){
                pFactory.SPlist = SPlayers.data;
                callback(pFactory.SPlist)
            })
            .catch(function(err){
                console.log(err);
            });
    }
    pFactory.getUSPlayers = function(callback){
        $http.get('/players/unsigned')
            .then(function(USPlayers){
                pFactory.USPlist = USPlayers.data;
                callback(pFactory.USPlist)
            })
            .catch(function(err){
                console.log(err);
            });
    }
    pFactory.cut = function(id){
        console.log('in PF cut');
        $http.put(`/playerCut/${id}`)
            .then(function(response){
                console.log(response);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    pFactory.liquidate = function(id){
        console.log("in PF liquidate");
        $http.put(`/playersLiquidate/${id}`)
            .then(function(response){
                console.log(response);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    return pFactory;
}])
