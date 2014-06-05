'use strict';

angular.module(APP_NAME_SERVICES).factory('Example', ['ResourceFactory', 'Constants',
	function(ResourceFactory, Constants) {
		var resourcesInfo = {
			name : "example",
			idField : 'name',
			apiUrl : Constants.apiUrl
		};
		return ResourceFactory.createResource(resourcesInfo);
	}]);