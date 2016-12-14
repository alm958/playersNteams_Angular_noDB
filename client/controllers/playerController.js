
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
