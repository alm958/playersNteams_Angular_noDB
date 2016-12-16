
app.controller('PlayersController', ['$scope', '$route', 'playerFactory', function PlayersController($scope, $route, playerFactory){
    function GetList(pList){
        $scope.playerlist = pList;
    }
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;
    $scope.playerlist = [];
    $scope.addPlayer = function(){
        console.log($scope.newPlayer);
        playerFactory.addPlayer($scope.newPlayer);
        $scope.newPlayer = {};
        playerFactory.getPlayers(GetList);
    };
    $scope.delPlayer = function(id){
        console.log(id);
        playerFactory.delPlayer(id);
        playerFactory.getPlayers(GetList);
    };
    $scope.updatePlayer = function(id){
        console.log(id);
        playerFactory.updatePlayer(id);
        playerFactory.getPlayers(GetList);
    }
    var init = function(){
        playerFactory.getPlayers(GetList);
    };
    init();
}]);
