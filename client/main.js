var app = angular.module('app',['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/associations',{
        templateUrl: 'partials/_associations.html',
        controller: 'AssociationsController'
    })
    .when('/teams',{
        templateUrl: 'partials/_teams.html',
        controller: 'TeamsController'
    })
    .when('/players',{
        templateUrl: 'partials/_players.html',
        controller: 'PlayersController'
    })
    .otherwise({
         redirectTo: "/players"
     });
    $locationProvider.html5Mode(true);
}]);

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

app.controller('PlayersController', ['$scope', '$route', 'playerFactory', function PlayersController($scope, $route, playerFactory){
    function GetList(pList){
        $scope.playerlist = pList;
    }

    var pCounter = playerFactory.pCounter;
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;
    $scope.playerlist = [];
    $scope.addPlayer = function(){
        console.log($scope.newPlayer);
        $scope.newPlayer.pNum = pCounter++
        console.log($scope.newPlayer);
        playerFactory.addPlayer($scope.newPlayer);
        $scope.newPlayer = {};
        playerFactory.getPlayers(GetList);
    };
    $scope.delPlayer = function(pNum){

        playerFactory.delPlayer(pNum);
        // $scope.itemNo = {};
        playerFactory.getPlayers(GetList);
    };
    var init = function(){
        playerFactory.getPlayers(GetList);
    };
    init();
}]);
app.controller('TeamsController', ['$scope', '$route', 'teamFactory', 'playerFactory', function TeamsController($scope, $route, teamFactory, playerFactory){
    function GetList(tList){
        $scope.teamlist = tList;
    }
    var tCounter = teamFactory.tCounter;
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;
    $scope.teamlist = [];
    $scope.addTeam = function(){
        console.log($scope.newTeam);
        $scope.newTeam.tNum = tCounter++
        console.log($scope.newTeam);
        teamFactory.addTeam($scope.newTeam);
        $scope.newTeam = {};
        teamFactory.getTeams(GetList);
    };
    $scope.delTeam = function(tNum, tName){
        console.log(tName);
        teamFactory.delTeam(tNum);
        playerFactory.liquidate(tName);
        // $scope.itemNo = {};
        teamFactory.getTeams(GetList);
    };
    var init = function(){
        teamFactory.getTeams(GetList);
    };
    init();
}]);
app.controller('AssociationsController', ['$scope', '$route', 'teamFactory', 'playerFactory', function TeamsController($scope, $route, teamFactory, playerFactory){
    function GetTList(tList){
        $scope.teamlist = tList;
    }
    function GetPList(pList){
        $scope.playerlist = pList;
    }
    function GetSignedPList(SPList){
        $scope.SPList = SPList;
    }
    function GetUnSignedPList(USPList){
        $scope.USPList = USPList;
    }
    $scope.addPtoTeam = function(){
        console.log($scope.updateP.pName);
        console.log($scope.updateP.team);
        playerFactory.AddPtoTeam($scope.updateP.pName, $scope.updateP.team);
        $scope.updateP = {};
        playerFactory.getSPlayers(GetSignedPList);
        playerFactory.getUSPlayers(GetUnSignedPList);
        console.log($scope.SPList);
    }
    $scope.cut = function(pNum){
        playerFactory.cut(pNum);
        playerFactory.getSPlayers(GetSignedPList);
        playerFactory.getUSPlayers(GetUnSignedPList);

    }
    var init = function(){
        console.log('running init func');
        playerFactory.getPlayers(GetPList);
        playerFactory.getSPlayers(GetSignedPList);
        playerFactory.getUSPlayers(GetUnSignedPList);
        teamFactory.getTeams(GetTList);
        console.log($scope.USPList);
    };
    init();

}]);
