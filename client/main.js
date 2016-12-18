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
    .when('/',{
        templateUrl: 'partials/_players.html',
        controller: 'PlayersController'
    })
    .when('/updatePlayer/:id',{
        templateUrl: 'partials/_updatePlayer.html',
        controller: 'PlayersController'
    })
    .otherwise({
         redirectTo: "/"
     });
}]);
