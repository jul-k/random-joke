'use strict';

/**
 * @ngdoc function
 * @name quotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quotesApp
 */



angular.module('quotesApp')
    .factory('JokesFactory', ['$http', function($http) {
        return {
            getJokesFuture: function() {
                return $http.get('jokes.json');
            }
        };
    }])
  .controller('MainCtrl',  ['$scope', 'JokesFactory', function($scope, JokesFactory) {
    $scope.jokesList = [];
    $scope.currentJoke = null;

    JokesFactory.getJokesFuture().success(function (data) {
        $scope.jokesList = data;
        $scope.currentJoke = data.value[2].joke;
    })

    $scope.randomJoke = function () {
        var randomIndex = Math.random() * $scope.jokesList.value.length;
        $scope.currentJoke = $scope.jokesList.value[Math.floor(randomIndex)].joke;
    };
}]);
