//define the phonecatApp module
angular.module("phonecatApp", [
  // ...which depends on the `phoneList` module,  ngRoute service and phoneDetail module
  "ngRoute",
  "phoneList",
  "core",
  "phoneDetail",
]);
