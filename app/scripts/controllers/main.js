'use strict';

/**
 * @ngdoc function
 * @name webdevjobsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webdevjobsApp
// //  */
//


app.controller('MainCtrl', function ($scope, FURL, $firebase) {
  var ref = new Firebase(FURL);
  var fbJobs = $firebase(ref.child('jobs')).$asArray();

  $scope.jobs = fbJobs;
  });



























