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
    .controller('MainCtrl', ['$scope', 'JokesFactory', function($scope,
        JokesFactory) {
        $scope.jokesList = [];
        $scope.currentJoke = null;
        $scope.host = window.location.hostname;

        JokesFactory.getJokesFuture().success(function(data) {
            $scope.jokesList = data.value;
            $scope.currentJoke = data.value[2].joke;
        });

        $scope.randomJoke = function() {
            var randomIndex = Math.random() * $scope.jokesList.length;
            $scope.currentJoke = $scope.jokesList[Math.floor(
                randomIndex)].joke;
        };

        $scope.btnEffect = function(event) {
            snabbt(event.target, 'attention', {
                rotation: [0, 0, Math.PI / 2],
                springConstant: 1.9,
                springDeceleration: 0.9,
            });
        };
    }]);
