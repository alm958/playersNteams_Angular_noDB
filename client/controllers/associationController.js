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
    $scope.USPlist = playerFactory.USPlist;
    $scope.SPlist = playerFactory.SPlist;
    $scope.addPtoTeam = function(){
        console.log($scope.updateP.pId);
        console.log($scope.updateP.tId);
        playerFactory.AddPtoTeam($scope.updateP.pId, $scope.updateP.tId);
        $scope.updateP = {};
        playerFactory.getSPlayers(GetSignedPList);
        playerFactory.getUSPlayers(GetUnSignedPList);
        console.log($scope.SPlist);
    }
    $scope.cut = function(pId){
        console.log('in AC cut');
        console.log(pId);
        playerFactory.cut(pId);
        playerFactory.getSPlayers(GetSignedPList);
        playerFactory.getUSPlayers(GetUnSignedPList);
    }
    var init = function(){
        console.log('running init func');
        playerFactory.getPlayers(GetPList);
        playerFactory.getSPlayers(GetSignedPList);
        playerFactory.getUSPlayers(GetUnSignedPList);
        teamFactory.getTeams(GetTList);
        console.log($scope.USPlist);
    };
    init();
}]);
