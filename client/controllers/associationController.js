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
