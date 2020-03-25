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
  "duration": 14548541967,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCartStep.user_opens_Product_store_homepages()"
});
formatter.result({
  "duration": 5882909255,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCartStep.user_clicks_cart()"
});
formatter.result({
  "duration": 4793975321,
  "status": "passed"
});
formatter.match({
  "location": "DeleteCartStep.delete_the_product_in_cart()"
});
formatter.result({
  "duration": 6125256254,
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
  "duration": 6381989186,
  "status": "passed"
});
formatter.match({
  "location": "SelectLaptopStep.user_opens_Product_store_homepage()"
});
formatter.result({
  "duration": 2447368007,
  "status": "passed"
});
formatter.match({
  "location": "SelectLaptopStep.user_clicks_laptop_tab()"
});
formatter.result({
  "duration": 2037682255,
  "status": "passed"
});
formatter.match({
  "location": "SelectLaptopStep.user_selects_a_laptop_and_gets_price_of_specific_laptop()"
});
formatter.result({
  "duration": 3143250105,
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
  "duration": 2952983400,
  "status": "passed"
});
formatter.match({
  "location": "CheckForPhoneNumberStep.user_opens_product_Store_homepage()"
});
formatter.result({
  "duration": 3671624900,
  "status": "passed"
});
formatter.match({
  "location": "CheckForPhoneNumberStep.user_checks_if_the_number_is_valid()"
});
formatter.result({
  "duration": 3218197981,
  "status": "passed"
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
  "duration": 2871299888,
  "status": "passed"
});
formatter.match({
  "location": "DescriptionStep.the_User_opens_product_Store_homepage()"
});
formatter.result({
  "duration": 1417597469,
  "status": "passed"
});
formatter.match({
  "location": "DescriptionStep.user_gets_the_description_of_the_specific_product()"
});
formatter.result({
  "duration": 5290110545,
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
  "duration": 2556001133,
  "status": "passed"
});
formatter.match({
  "location": "CheckForTwoProductStep.the_User_open_product_Store_homepage()"
});
formatter.result({
  "duration": 1841212719,
  "status": "passed"
});
formatter.match({
  "location": "CheckForTwoProductStep.user_need_to_check_whether_the_added_product_is_available_in_cart()"
});
formatter.result({
  "duration": 23815788374,
  "status": "passed"
});
});