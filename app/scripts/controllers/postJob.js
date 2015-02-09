'use strict';

var app = angular.module('webdevjobsApp');
app.controller('PostJobCtrl', function ($scope, FURL, $firebase, $location, toaster) {
  var ref = new Firebase(FURL);
  var fbJobs = $firebase(ref.child('jobs')).$asArray();

  $scope.jobs = fbJobs;

  	$scope.postJob = function(job){
  		fbJobs.$add(job);
  		toaster.pop('success', 'Job has been posted!');
  		$location.path('/');
  	};
  });

