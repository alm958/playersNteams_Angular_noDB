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
