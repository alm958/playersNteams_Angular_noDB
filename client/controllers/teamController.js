app.controller('TeamsController', ['$scope', '$route','$routeParams', 'teamFactory', 'playerFactory', function TeamsController($scope, $route, $routeParams, teamFactory, playerFactory){
    function GetList(tList){
        $scope.teamlist = tList;
    }
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;
    $scope.teamlist = teamFactory.teamlist;
    $scope.addTeam = function(){
        console.log($scope.newTeam);
        teamFactory.addTeam($scope.newTeam, function(){
            teamFactory.getTeams(GetList);
        });
        $scope.newTeam = {};

    };
    $scope.delTeam = function(id){
        playerFactory.liquidate(id, function(){
            teamFactory.delTeam(id, function(){
                teamFactory.getTeams(GetList);
            })
        })
    };
    $scope.getTeams = function(){
        teamFactory.getTeams(GetList);
    }
}]);
