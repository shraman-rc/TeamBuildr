angular.module('playerApp', [])
  .controller('PlayerController', function() {
    var playerList = this;
    playerList.players = [
      {name:'Joe Joeson', email: "joe@gmail.com", checkmark:false, position:"stuff", rating:5, gpa:4.0, sat: 1600, film:"file://null"}];

    playerList.addPlayer = function(player) {
      playerList.players.push(player);
    };
    playerList.removePlayer = function(player) {
      playerList.players.remove(player);
    };

    // inspired by http://stackoverflow.com/questions/1129216/sorting-objects-in-an-array-by-a-field-value-in-javascript
    playerList.sortByAscending = function(property) {
      return function(a, b) {
        return (a[property] > b[property]) ? 1 : (a[property] < b[property]) ? -1 : 0;
      };
    };

    playerList.sortByDescending = function(property) {
      return function(a, b) {
        return (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
      };
    };

  });
