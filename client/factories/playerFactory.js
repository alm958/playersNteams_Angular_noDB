app.factory('playerFactory', function(){
    var pFactory = {};
    pFactory.playerlist = [];
    pFactory.pCounter = 0;
    pFactory.addPlayer = function(player){
        pFactory.playerlist.push(player);
        pFactory.pCounter += 1
    }
    pFactory.getPlayers = function(callback){
        callback(pFactory.playerlist)
    }
    pFactory.delPlayer = function(pNum){
        var delIndex = pFactory.playerlist.findIndex(x => x.pNum === Number(pNum));
        pFactory.playerlist.splice( delIndex, 1 );
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
})
