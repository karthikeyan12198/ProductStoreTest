$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/Productstores.feature");
formatter.feature({
  "line": 1,
  "name": "Product_Store",
  "description": "",
  "id": "product-store",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "",
  "description": "To delete a product",
  "id": "product-store;",
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
  "line": 6,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user opens Product store homepages",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks cart",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "delete the product in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteCartStep.the_user_launch_the_chrome_application()"
});
