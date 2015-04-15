var teambuildrApp = angular.module('teambuildrApp', [
  'ngRoute',
  'playerControllers'
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

    $http.get("players.json").success(function(res){
      $scope.players = data;
      $scope.selectedPlayer = $scope.players[0];
    });



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
    }

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
    }



    $scope.allChecked = false;


  });