app.factory('teamFactory', function(){
    var tFactory = {};
    tFactory.teamlist = [];
    tFactory.tCounter = 0;
    tFactory.addTeam = function(team){
        tFactory.teamlist.push(team);
        tFactory.tCounter += 1
    }
    tFactory.getTeams = function(callback){
        callback(tFactory.teamlist)
    }
    tFactory.delTeam = function(tNum){
        var delIndex = tFactory.teamlist.findIndex(x => x.tNum === Number(tNum));
        tFactory.teamlist.splice( delIndex, 1 );
    }
    return tFactory;
})
