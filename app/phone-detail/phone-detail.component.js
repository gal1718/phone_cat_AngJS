angular.
module("phoneDetail").
component("phoneDetail", {
  templateUrl: 'phone-detail/phone-detail.template.html' ,
  controller: [
    "$routeParams", "Phone",
    function phoneDetailController($routeParams, Phone) {
      var self = this;
      this.phoneId = $routeParams.phoneId;
      
      self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        self.setImage(phone.images[0]);
      });

      self.setImage = function(imageUrl){
        self.mainImageUrl = imageUrl;
      }
    
      // $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
      //   self.phone = response.data;
      //   self.setImage(self.phone.images[0]);
      // });

    },
  ],
});
