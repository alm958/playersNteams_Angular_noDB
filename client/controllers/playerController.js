
app.controller('PlayersController', ['$scope', '$route','$routeParams', 'playerFactory', function PlayersController($scope, $route, $routeParams, playerFactory){
    function GetList(pList){
        $scope.playerlist = pList;
    }
    function CatchPlayer(player){
        $scope.UpdatedPlayer = player;
        console.log($scope.UpdatedPlayer);
    }
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;
    $scope.playerlist = playerFactory.playerlist;

    $scope.addPlayer = function(){
        console.log($scope.newPlayer);
        playerFactory.addPlayer($scope.newPlayer);
        $scope.newPlayer = {};
        $scope.getPlayers();
    };
    $scope.delPlayer = function(id){
        console.log(id);
        playerFactory.delPlayer(id);
        playerFactory.getPlayers(GetList);
    };
    $scope.updatePlayer = function(){
        console.log($scope.player);
        playerFactory.updatePlayer($scope.player, CatchPlayer);
    }
    $scope.findPlayerById = function(){
        console.log($route.current.params.id);
        var id = $route.current.params.id;
        var player = playerFactory.findPlayer(id);
        $scope.player = player;
    }
    $scope.getPlayers = function(){
        playerFactory.getPlayers(GetList);
    }

}]);
