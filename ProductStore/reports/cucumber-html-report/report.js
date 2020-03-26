$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/Productstore.feature");
formatter.feature({
  "line": 1,
  "name": "Product_Store",
  "description": "",
  "id": "product-store",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "To delete a product",
  "description": "",
  "id": "product-store;to-delete-a-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Tc01_DeleteCart"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user opens Product store homepages",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks cart",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "delete the product in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteCartStep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 8002775931,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCartStep.user_opens_Product_store_homepages()"
});
formatter.result({
  "duration": 2968009112,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCartStep.user_clicks_cart()"
});
formatter.result({
  "duration": 19881949685,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCartStep.delete_the_product_in_cart()"
});
formatter.result({
  "duration": 4385793653,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "To get price of a specific laptop",
  "description": "",
  "id": "product-store;to-get-price-of-a-specific-laptop",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Tc02_SelectLaptop"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User opens Product store homepage",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks laptop tab",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User selects a laptop and gets price of specific laptop",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectLaptopStep.user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 3907684193,
  "status": "passed"
});
formatter.match({
  "location": "SelectLaptopStep.user_opens_Product_store_homepage()"
});
formatter.result({
  "duration": 2277169770,
  "status": "passed"
});
formatter.match({
  "location": "SelectLaptopStep.user_clicks_laptop_tab()"
});
formatter.result({
  "duration": 19350374740,
  "status": "passed"
});
formatter.match({
  "location": "SelectLaptopStep.user_selects_a_laptop_and_gets_price_of_specific_laptop()"
});
formatter.result({
  "duration": 3185669956,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To check phone no",
  "description": "",
  "id": "product-store;to-check-phone-no",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Tc03_To_check_phone_number"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "the user launch chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User opens product Store homepage",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User checks if the number is valid",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckForPhoneNumberStep.user_launch_chrome_application()"
});
formatter.result({
  "duration": 3629717788,
  "status": "passed"
});
formatter.match({
  "location": "CheckForPhoneNumberStep.user_opens_product_Store_homepage()"
});
formatter.result({
  "duration": 2740652207,
  "status": "passed"
});
formatter.match({
  "location": "CheckForPhoneNumberStep.user_checks_if_the_number_is_valid()"
});
formatter.result({
  "duration": 41589286,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c440 12[2]3456\u003e but was:\u003c440 12[]3456\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.ProductStore.StepDefinition.CheckForPhoneNumberStep.user_checks_if_the_number_is_valid(CheckForPhoneNumberStep.java:33)\n\tat ✽.Then User checks if the number is valid(src/main/resources/features/Productstore.feature:21)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 24,
  "name": "To get the product description",
  "description": "",
  "id": "product-store;to-get-the-product-description",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Tc04_To_get_description"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user launch chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "The User opens product Store homepage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User gets the description of the specific product",
  "keyword": "Then "
});
formatter.match({
  "location": "DescriptionStep.user_launch_chrome_application()"
});
formatter.result({
  "duration": 3596086071,
  "status": "passed"
});
formatter.match({
  "location": "DescriptionStep.the_User_opens_product_Store_homepage()"
});
formatter.result({
  "duration": 23224982316,
  "status": "passed"
});
formatter.match({
  "location": "DescriptionStep.user_gets_the_description_of_the_specific_product()"
});
formatter.result({
  "duration": 23024211183,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "To add more than one product to cart",
  "description": "",
  "id": "product-store;to-add-more-than-one-product-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Tc05_To_add_two_product"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "The User open product Store homepage",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user need to check whether the added product is available in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckForTwoProductStep.launch_the_chrome_application()"
});
formatter.result({
  "duration": 7183371901,
  "status": "passed"
});
formatter.match({
  "location": "CheckForTwoProductStep.the_User_open_product_Store_homepage()"
});
formatter.result({
  "duration": 59394611289,
  "status": "passed"
});
formatter.match({
  "location": "CheckForTwoProductStep.user_need_to_check_whether_the_added_product_is_available_in_cart()"
});
formatter.result({
  "duration": 35745587491,
  "status": "passed"
});
});