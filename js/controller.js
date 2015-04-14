angular.module('teambuildrApp', [])
  .controller('PlayerController', function($scope, $http) {

    $scope.players = playerData;

    // $http.get("players.json").success(function(res){
    //   $scope.players = data;
    // });

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

[

var playerData = {
  name:'Joe Joeson',
  email: "joe@gmail.com",
  checkmark:false,
  position:"stuff",
  rating:5,
  gpa:4.0,
  sat: 1600,
  film:"file://null"
},

{
  name:'Jack Jackon',
  email: "jack@gmail.com",
  checkmark:false,
  position:"stuff",
  rating:4,
  gpa:3.0,
  sat: 1500,
  film:"file://null"
},

{
  name:'Jim Jimson',
  email: "jim@gmail.com",
  checkmark:false,
  position:"stuff",
  rating:3,
  gpa:4.5,
  sat: 1400,
  film:"file://null"
},

{
  name:'Jorge Jorgeson',
  email: "jorge@gmail.com",
  checkmark:false,
  position:"stuff",
  rating:3,
  gpa:2.0,
  sat: 1550,
  film:"file://null"
},

{
  name:'Jill Jillson',
  email: "jill@gmail.com",
  checkmark:false,
  position:"stuff",
  rating:5,
  gpa:3.8,
  sat: 1590,
  film:"file://null"
}

]
