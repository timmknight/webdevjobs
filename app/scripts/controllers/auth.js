'use strict';

app.controller('AuthController', function($scope, $location, Auth, toaster){

	if(Auth.signedIn()){
		$location.path('/');
	}


	$scope.register = function(user){
		Auth.register(user).then(function(){
			toaster.pop('success', 'Registered successfully.');
			// console.log("Registered successfully!");
			$location.path('/');
		}, function(err){
			console.log(err);
			if(err.code === "EMAIL_TAKEN"){
				toaster.pop('error', 'Email address already in use.');
			}else{
				toaster.pop('error', 'Oops, something went wrong.');
			}
			
		});
	};

	$scope.login = function(user){
		Auth.login(user).then(function(){
			toaster.pop('success', 'Logged in successfully.');
			// console.log("Logged in successfully!");
			$location.path('/');
		}, function(err){
			// console.log("Error..");
			toaster.pop('error', 'Oops, something went wrong.');
		});
	};

	$scope.changePassword = function(user){
		Auth.changePassword(user)
		.then(function(){
			//Reset form
			$scope.user.email = '';
			$scope.user.oldPass = '';
			$scope.user.newPass = '';
			toaster.pop('success', 'Password changed successfully.');
			// console.log("Password changed successfully!");
			$location.path('/');
		}, function(err){
			// console.log("Error..");
			toaster.pop('error', 'Oops, something went wrong.');
		});
	};
});