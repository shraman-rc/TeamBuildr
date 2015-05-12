// App module

var teambuildrApp = angular.module('teambuildrApp', [
  'ngRoute',
  'playerControllers',
  'ui.sortable',
]);

// Routes

teambuildrApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/table.html',
        controller: 'PlayerController'
      }).
      when('/email', {
        templateUrl: 'templates/email.html',
        controller: 'PlayerController'
      }).
      when('/compare', {
        templateUrl: 'templates/compare.html',
        controller: 'PlayerController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

// Controllers

var playerControllers = angular.module('playerControllers', []);
playerControllers.controller('PlayerController', function($scope, $http) {

    $scope.players = playerData;
    $scope.selectedPlayer = $scope.players[0];
    $scope.editedPlayer = null;
    $scope.comparedPlayers = [];

    // Filter attributes
    $scope.posFilter = null;
    $scope.minGPA = 0.0;
    $scope.minSAT = 0;

    // Filter state (true = pressed, false = unpressed)
    $scope.posState = false;
    $scope.GPAState = false;
    $scope.SATState = false;



    $scope.selected = function(el) {
      console.log('sigh almost there');
    }


    $scope.addPlayer = function() {
      var player = {name:$("#name").val(), email:$("#email_addr").val(), checkmark:false, position:$("#position").val(), rating:$("#rating").val(),
        gpa:$("#gpa").val(), sat:$("#sat").val(), film:$("#film").val()};
        
      $scope.players.push(player);
      $('.modal').modal('hide');
    };

    $scope.loadEmails = function() {
      var emails;
      for (var i=0; i<$scope.players.length; i++){
        if ($scope.players[i].checkmark)
          emails+=$scope.players[i].email+"; ";
      }
      $('#mailto').val(emails);
    }

    $scope.emailSubmit = function(){
      console.log("happening");
      $('.modal').modal('hide');
    };

    $scope.removePlayer = function(player) {
      $scope.players.remove(player);
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
      for (var i=0; i<$scope.players.length; i++)
        $scope.players[i].checkmark = $scope.allChecked;
    };

    $scope.check = function(p) {
      $scope.allChecked = true;

      for (var i=0; i<$scope.players.length; i++) {
        if(!$scope.players[i].checkmark)
          $scope.allChecked = false;
      }
    };

    $scope.setSelected = function(player) {
      $scope.selectedPlayer = player;
      var player2 = {name:player.name, email:player.email, checkmark:false, position:player.position, rating:player.rating,
        gpa:player.gpa, sat:player.sat, film:player.film};
      $scope.editedPlayer = player2;
    };

    $scope.editPlayer = function() {
      $scope.selectedPlayer.name = $scope.editedPlayer.name;
      $scope.selectedPlayer.email = $scope.editedPlayer.email;
      $scope.selectedPlayer.gpa = $scope.editedPlayer.gpa;
      $scope.selectedPlayer.sat = $scope.editedPlayer.sat;
      $scope.selectedPlayer.film = $scope.editedPlayer.film;
      $scope.selectedPlayer.position = $scope.editedPlayer.position;
      $scope.selectedPlayer.rating = $scope.editedPlayer.rating;
      $('.modal').modal('hide');
    };

    // $scope.setDraggedPlayer = function(player){
    //   $scope.draggedPlayer = player;
    // }

    $scope.addToCompare = function(player) {
      if($scope.comparedPlayers.indexOf(player) === -1){
        $scope.comparedPlayers.push(player);
      }
    };

    $scope.compareFilter = function(player) {
      var validPos = $scope.posFilter == null || player.position == $scope.posFilter;
      return validPos && player.gpa >= $scope.minGPA && player.sat >= $scope.minSAT;
    };

    $scope.setPosFilter = function(pos){
      if($scope.posState){
        $scope.posFilter = null;
        $scope.posState = false;
      } else {
        $scope.posFilter = pos;
        $scope.posState = true;
      }
    }

    $scope.setGPAFilter = function(GPA){
      if($scope.GPAState){
        $scope.minGPA = 0.0;
        $scope.GPAState = false;
      } else {
        $scope.minGPA = GPA;
        $scope.GPAState = true;
      }
    }

    $scope.setSATFilter = function(SAT){
      if($scope.SATState){
        $scope.minSAT = 0;
        $scope.SATState = false;
      } else {
        $scope.minSAT = SAT;
        $scope.SATState = true;
      }
    }

    // UI-Sortable Library options
    $scope.sortableOptions = {
        axis: 'x'
    };


    $scope.allChecked = false;


  });

// Hard-coded Data

var playerData = [{
  id: 1,
  name:'Joe Schneider',
  email: "joe@gmail.com",
  checkmark:false,
  position:"SF",
  rating:4,
  gpa:4.0,
  sat: 1600,
  film:"https://www.youtube.com/watch?v=CU9EW3TgfyI"
},

{
  id: 2,
  name:'Felix Albert',
  email: "falb@gmail.com",
  checkmark:false,
  position:"SF",
  rating:4,
  gpa:3.0,
  sat: 1520,
  film:"https://www.youtube.com/watch?v=u2wwuA8AufA"
},

{
  id: 3,
  name:'Theo James',
  email: "jamest@gmail.com",
  checkmark:false,
  position:"SG",
  rating:5,
  gpa:3.4,
  sat:1330,
  film:"https://www.youtube.com/watch?v=ockLGk0syuI"
},

{
  id: 4,
  name:'Riley Minorik',
  email: "rikid22@gmail.com",
  checkmark:false,
  position:"C",
  rating:5,
  gpa:3.5,
  sat:1440,
  film:"https://www.youtube.com/watch?v=ockLGk0syuI"
},

{
  id: 5,
  name:'Kalya Torres',
  email: "ktorr@gmail.com",
  checkmark:false,
  position:"C",
  rating:4,
  gpa:3.97,
  sat:1580,
  film:"https://www.youtube.com/watch?v=7Me1iui8H7s"
},

{
  id: 6,
  name:'John Lauck',
  email: "lauck@gmail.com",
  checkmark:false,
  position:"PG",
  rating:2,
  gpa:3.5,
  sat:1500,
  film:"https://www.youtube.com/watch?v=ZzkLcBerZQg"
},

{
  id: 7,
  name:'John Maeda',
  email: "maeda@gmail.com",
  checkmark:false,
  position:"PG",
  rating:3,
  gpa:3.9,
  sat:1580,
  film:"https://www.youtube.com/watch?v=Q9Igg8ws5FA"
},

{
  id: 8,
  name:'Ryan Crawford',
  email: "crawford@sports.com",
  checkmark:false,
  position:"C",
  rating:3,
  gpa:2.5,
  sat: 1200,
  film:"https://www.youtube.com/watch?v=rJno-m3ndpc"
},

{
  id: 9,
  name:'Allen Williams',
  email: "awill@gmail.com",
  checkmark:false,
  position:"PF",
  rating:3,
  gpa:2.0,
  sat: 1150,
  film:"https://www.youtube.com/watch?v=BIFhHFSvsdo"
},

{
  id: 10,
  name:'Andrew Wells',
  email: "drew@gmail.com",
  checkmark:false,
  position:"C",
  rating:3,
  gpa:3.7,
  sat: 1350,
  film:"https://www.youtube.com/watch?v=fJvCgJZP7pg"
},

{
  id: 11,
  name:'Jorge Gonsales',
  email: "jorge@gmail.com",
  checkmark:false,
  position:"SF",
  rating:3,
  gpa:3.2,
  sat: 1350,
  film:"https://www.youtube.com/watch?v=-K0FJ-Q49iI"
},

{
  id: 12,
  name:'Arthur Burkhart',
  email: "artsquared@gmail.com",
  checkmark:false,
  position:"C",
  rating:3,
  gpa:3.6,
  sat: 1420,
  film:"https://www.youtube.com/watch?v=xR3gonK5AyU"
},


{
  id: 13,
  name:'Justin Taylor',
  email: "jtaylor@gmail.com",
  checkmark:false,
  position:"SG",
  rating:5,
  gpa:3.8,
  sat: 1590,
  film:"https://www.youtube.com/watch?v=pMU8i6mWZMw"
}];