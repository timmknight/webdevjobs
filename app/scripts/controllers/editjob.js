'use strict';

/**
 * @ngdoc function
 * @name webdevjobsApp.controller:MainCtrl
 * @description
 * # JobsCtrl
 * Controller of the webdevjobsApp
//  */
// angular.module('webdevjobsApp')
//   .controller('JobCtrl', function ($scope) {
//     $scope.b = 'b';
//   });

app.controller('EditJobCtrl', function ($scope, FURL, $firebase, $location, $routeParams, toaster) {
	var ref = new Firebase(FURL);
	var fbJobs = $firebase(ref.child('jobs')).$asArray();
	var jobId = $routeParams.jobId;

	if(jobId){
		$scope.selectedJob = getJob(jobId);
	}

	function getJob(jobId){
		return $firebase(ref.child('jobs').child(jobId)).$asObject();
	}

	$scope.deleteJob = function(job){
		$scope.selectedJob.$remove(job);
		$location.path('/');
	};

	$scope.updateJob = function(job){
		$scope.selectedJob.$save(job);
		toaster.pop('success', 'Job has been updated.');
		$location.path('/');
	};
	  $scope.jobs = fbJobs;
});

