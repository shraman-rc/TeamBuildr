angular.module('teambuildrApp', [])
  .controller('PlayerController', function($scope) {
    
    $scope.players = [
      {name:'Joe Joeson', email: "joe@gmail.com", checkmark:false, position:"stuff", rating:5, gpa:4.0, sat: 1600, film:"file://null"}];

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

    $scope.checkAll = function(check) {
      for (var player in playerList)
        player.checkmark = check;
    };

  });
