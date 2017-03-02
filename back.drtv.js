angular.module('backButton', [])
.directive("backButton", ["$window", function($window) {
	return {
    	restrict: 'A',
        link: function (scope, element, attr) {
            element.bind('click', function () {
                $window.history.back();
            });
        }
  	};
}]);