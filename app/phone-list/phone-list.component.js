angular.
module("phoneList").
component("phoneList", {
  templateUrl: "phone-list/phone-list.template.html",
  controller: [
    "Phone",
    function PhoneListController(Phone) {
      //PhoneListController.$inject = ["Phone"];
      var self = this;
      self.orderProp = "age";
     // console.log("PHONE: " + Phone);
      this.phones = Phone.query();
      
      //url relative to index.html file
      // $http.get("phones/phones.json").then(function(response) {
      //   self.phones = response.data.slice(0, 5);
      // });
    },
  ],
});

// this.phones = [
//   {
//     name: "Nexus S",
//     snippet: "Fast just got faster with Nexus S.",
//     age: 1,
//   },
//   {
//     name: "Motorola XOOM™ with Wi-Fi",
//     snippet: "The Next, Next Generation tablet.",
//     age: 2,
//   },
//   {
//     name: "MOTOROLA XOOM™",
//     snippet: "The Next, Next Generation tablet.",
//     age: 3,
//   },
// ];
