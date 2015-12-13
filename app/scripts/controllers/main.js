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
    JokesFactory.getJokesFuture().success(function (data) {
        $scope.jokesList = data;
        console.log("Loaded");
    })

    $scope.randomJoke = function () {

    }
}]);
