angular.module('teambuildrApp', [])
  .controller('PlayerController', function($scope, $http) {

    $http.get("players.json").success(function(res){
      $scope.players = data;
    });

    $scope.addPlayer = function(player) {
      playerList.players.push(player);
    };

    $scope.removePlayer = function(player) {
      playerList.players.remove(player);
    };

    // inspired by http://stackoverflow.com/questions/1129216/sorting-objects-in-an-array-by-a-field-value-in-javascript
    $scope.sortByAscending = function(property) {
      return function(a, b) {
        return (a[property] > b[property]) ? 1 : (a[property] < b[property]) ? -1 : 0;
      };
    };

    $scope.sortByDescending = function(property) {
      return function(a, b) {
        return (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
      };
    };

    $scope.checkAll = function() {
      for (var i=0; i<playerList.players.length; i++)
        playerList.players[i].checkmark = playerList.allChecked;
    };

    $scope.allChecked = false;

  });
