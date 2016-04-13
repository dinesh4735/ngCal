//home.html
if (document.getElementById("myDiv1") != null) {
    section2.controller('myCtrl', function ($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
    });
    section1.controller('testCtrl', function ($scope) {
        $scope.name = "defaultValue";
        $scope.people = [{ firstname: 'john', lastname: 'doe' },
            { firstname: 'kohn', lastname: 'coe' },
            { firstname: 'lohn', lastname: 'boe' },
            { firstname: 'aohn', lastname: 'aoe' }];
    });
    section3.controller('myHttpCtrl', function ($scope, $http) {
        $http.get("/WebService.asmx/GetPersonList")
        .success(function (response) {
            $scope.extData = response;
        });
    });
}
//click.html
if (document.getElementById("clickSection1") != null) {
    clicksec1.controller('clickSection1', function ($scope) {
        $scope.count = 0;
    });

    clicksec2.controller('clickSection2', function ($scope) {
        $scope.firstName = "john";
        $scope.lastName = "samules";
        $scope.myVar = false;
        $scope.toggle = function () {
           
            $scope.myVar = !$scope.myVar;
        }
    });
  clicksec3.controller('clickSection3', function ($scope) {
      $scope.master = { firstname: "john", lastname: "delton" ,email:"abc@abc.com"};
      $scope.reset = function () {

          $scope.user = angular.copy($scope.master);
      }
       $scope.reset();
    });

}