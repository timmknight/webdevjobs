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

app.controller('EditJobCtrl', function ($scope, FURL, $firebase, $location, $routeParams, toaster, Auth) {
	var ref = new Firebase(FURL);
	var fbJobs = $firebase(ref.child('jobs')).$asArray();
	var jobId = $routeParams.jobId;
	var user = Auth.user;

	if(jobId){
		$scope.selectedJob = getJob(jobId);
	}

	function getJob(jobId){
		// console.log(fbJobs);
		// console.log(jobId);
		// console.log(user);
		// console.log(user.provider);
		// console.log(user.uid);
		// console.log(job.poster);
		// console.log($firebase(ref.child('jobs').child(jobId)).$asObject());
		return $firebase(ref.child('jobs').child(jobId)).$asObject();
	}

	$scope.deleteJob = function(job){
		$scope.selectedJob.$remove(job);
		$location.path('/');
	};

	// $scope.isCreator = function(job){
	// 	if(user && user.provider && user.id === id.poster){
	// 		console.log("Can edit");
	// 	}
	// };

	$scope.updateJob = function(job){
		// if(user && user.provider && user.id === id.poster){
		// 	console.log("Can edit");
		// }
		$scope.selectedJob.$save(job);
		toaster.pop('success', 'Job has been updated.');
		$location.path('/');
		// return (user && user.provider && user.uid === )
	};
	  $scope.jobs = fbJobs;
});

