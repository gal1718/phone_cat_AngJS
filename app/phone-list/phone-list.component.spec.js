describe("phoneList", function() {
  // Load the module that contains the `phoneList` component before each test
  beforeEach(module("phoneList"));

  // Test the controller
  describe("PhoneListController", function() {
    it("should create a `phones` model with 3 phones", inject(function(
      $componentController
    ) {
      var ctrl = $componentController("phoneList");

      expect(ctrl.phones.length).toBe(3);
    }));

    it("should set a default value for the `orderProp` model", function() {
      expect(ctrl.orderProp).toBe("age");
    });
  });
});
