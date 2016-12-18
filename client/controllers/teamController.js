app.controller('TeamsController', ['$scope', '$route','$routeParams', 'teamFactory', 'playerFactory', function TeamsController($scope, $route, $routeParams, teamFactory, playerFactory){
    function GetList(tList){
        $scope.teamlist = tList;
    }
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;
    $scope.teamlist = teamFactory.teamlist;
    $scope.addTeam = function(){
        console.log($scope.newTeam);
        teamFactory.addTeam($scope.newTeam);
        $scope.newTeam = {};
        teamFactory.getTeams(GetList);
    };
    $scope.delTeam = function(id){
        console.log(id);
        playerFactory.liquidate(id);
        teamFactory.delTeam(id);
        teamFactory.getTeams(GetList);
        
    };
    $scope.getTeams = function(){
        teamFactory.getTeams(GetList);
    }
}]);
