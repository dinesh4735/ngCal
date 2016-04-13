angular.element(document).ready(function () {
    // for homepage.html
    if (document.getElementById("myDiv1") != null) {
        angular.bootstrap(document.getElementById("myDiv1"), ["app1"]);
        angular.bootstrap(document.getElementById("myDiv2"), ["app2"]);
        angular.bootstrap(document.getElementById("myDiv3"), ["app3"]);
    }
    //for clicks.html
    if (document.getElementById("clickSection1") != null) {
        angular.bootstrap(document.getElementById("clickSection1"), ["appclick1"]);
        angular.bootstrap(document.getElementById("clickSection2"), ["appclick2"]);
        angular.bootstrap(document.getElementById("clickSection3"), ["appclick3"]);
    }
  
});