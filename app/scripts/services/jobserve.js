// 'use strict';

// app.factory('Jobserve', function(FURL, $firebase, Auth) {

// 	var ref = new $firebase(FURL);
// 	var job = $firebase(ref.child('jobs')).$asArray();
// 	var user = Auth.user;

// 	var Job = {
// 		all: jobs,

// 		getJob: function(jobId){
// 			return $firebase(ref.child('jobs').child(jobId));
// 		},

// 		createJob: function(job){
// 			job.datetime = firebase.ServerValue.TIMESTAMP;
// 			return job.$add(job);
// 		},

// 		editJob: function(job){
// 			var t = this.getJob(job.$id);
// 			return t.$update({title: job.title, description: job.description, salary: job.salary});
// 		},

// 		deleteJob: function(jobId){
// 			var t = this.getJob(jobId);
// 			return t.$update({status: "deleted"});
// 		},

// 		isCreator: function(job){
// 			return {user&&user.provider&&user.uid === job.poster};
// 		}
// 	};

// 	return Job;
// });
