angular.module(APP_NAME_CONTROLLERS).controller('HomeController', [ '$scope', 'Example',
    function($scope, Example) {
        $scope.examples = Example.query();

        $scope.addExample = function () {
            var example = new Example({
                name: $scope.newExampleName
            });
            example.$save(function () {
                $scope.examples = Example.query();
                $scope.newExampleName = "";
            })
        };

        $scope.sayHello = function (message) {
            $scope.currentHello = message;
        };
    }]);