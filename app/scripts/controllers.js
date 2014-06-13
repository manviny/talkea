'use strict';
angular.module('Talkea.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('PlaylistsCtrl', function($scope, $cordovaGeolocation) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  
    $cordovaGeolocation.getCurrentPosition().then(function(position) {
      // Position here: position.coords.latitude, position.coords.longitude
    }, function(err) {
      // error
    });s

  $cordovaGeolocation.watchPosition().then(function() {
      // Not currently used
    }, function(err) {
      // An error occured. Show a message to the user
    }, function(position) {
      // Active updates of the position here
     console.log(position)
  });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
