angular.module('playerApp', [])
  .controller('PlayerController', function() {
    var playerList = this;
    playerList.players = [
      {name:'Joe Joeson', checkmark:false, position:"stuff", rating:5, gpa:4.0, sat: 1600}];

    playerList.addPlayer = function(player) {
      playerList.players.push(player);
    };
    playerList.removePlayer = function(player) {
      playerList.players.remove(player);
    };

  });
