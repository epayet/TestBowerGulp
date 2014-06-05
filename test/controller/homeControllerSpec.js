describe("HomeController", function () {
    var scope = {};
    var controller;
    var $httpBackend;

    beforeEach(module(APP_NAME));
    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller){
        $httpBackend = _$httpBackend_;

        scope = $rootScope.$new();
        controller = $controller("HomeController", {$scope: scope});
    }));

    it("should create a HomeController", function() {
        expect(controller).toBeDefined();
    });

    it("should create 2 'examples' model from API", function () {
        var expectedData = [
            {name: "name1"},
            {name: "name2"}
        ];
        $httpBackend.expectGET("http://localhost:8080/example").respond(expectedData);

        expect(scope.examples).toEqualData([]);
        $httpBackend.flush();
        expect(scope.examples).toEqualData(expectedData);
    });

    it("should add an example", function () {
        $httpBackend.expectGET("http://localhost:8080/example").respond([]);
        $httpBackend.expectPOST("http://localhost:8080/example").respond({name: "test"});
        $httpBackend.expectGET("http://localhost:8080/example").respond([{name: "test"}]);

        expect(scope.examples).toEqualData([]);
        scope.newExampleName = "test";
        scope.addExample();
        $httpBackend.flush();
        expect(scope.examples).toEqualData([{name: "test"}]);
    });

    it("should say hello", function () {
        expect(scope.currentHello).toBeUndefined();
        scope.sayHello("world");
        expect(scope.currentHello).toBe("world");
    });
});