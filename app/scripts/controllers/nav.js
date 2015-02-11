'use strict';

app.controller('NavCtrl', function($scope, $location, Auth, toaster){

	$scope.currentUser = Auth.user;
	$scope.signedIn = Auth.signedIn;

	$scope.logout = function(){
		Auth.logout();
		toaster.pop('success', 'Logged out successfully.');
		// console.log("logged out!");
		$location.path('/');
	};
});