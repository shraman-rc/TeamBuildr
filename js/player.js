angular.module('playerApp', [])
  .controller('PlayerController', function() {
    var playerList = this;
    playerList.players = [
      {name:'Joe Joeson', checkmark:false, position:"stuff", rating:5, gpa:4.0, sat: 1600, film:"file://null"}];

    playerList.addPlayer = function(player) {
      playerList.players.push(player);
    };
    playerList.removePlayer = function(player) {
      playerList.players.remove(player);
    };

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
