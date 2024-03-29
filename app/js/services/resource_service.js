'use strict';

module.exports = function(app) {
	var handleSuccess = function(data) {
		this.callback(null, data);
	};

	var handleError = function(data) {
		this.callback(data);
	};

	app.factory('resource', ['$http', function($http) {
		return function(resourceName) {
			return {
				getAll: function(callback) {
					$http({
						method: 'GET',
						url: '/api/v1/' + resourceName
					})
					.success(handleSuccess).bind({callback: callback})
					.error(handleError);
				},

				create: function(resource, callback) {
					$http({
						method: 'POST',
						url: '/api/v1/' + resourceName,
						data: resource
					})
					.success(callback)
					.error(handleError);
				},

				save: function(resource, callback) {
					$http({
						method: 'PUT',
						url: '/api/v1/' + resourceName + '/' + resource._id,
						data: resource
					})
					.success(callback)
					.error(handleError);
				},

				remove: function(resource, callback) {
					$http({
						method: 'DELETE',
						url: '/api/v1/' + resourceName + '/' + resource._id
					})
					.success(callback)
					.error(handleError);
				}
			};
		};
	}]);
};