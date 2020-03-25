package com.ProductStore.Runner;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/features/Productstore.feature",
		plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
		tags = {"@Tc01_DeleteCart,@Tc02_SelectLaptop,@Tc03_To_check_phone_number,@Tc04_To_get_description,@Tc05_To_add_two_product"},
		glue = {"com.ProductStore.StepDefinition"},
		monochrome = true
		)
public class Productstore_testrunner {
	@AfterClass
	  public static void extendReport() {
		Reporter.loadXMLConfig("src/test/resources/Extent-config.xml");
		Reporter.setSystemInfo("User Name",System.getProperty("user.name"));
		Reporter.setSystemInfo("Time Zone",System.getProperty("user.timezone"));
		Reporter.setSystemInfo("Machine","MacOS Mojave" + "64 Bit");
		Reporter.setSystemInfo("Selenium","3.141.59");
		Reporter.setSystemInfo("Maven","4.0.0");
Reporter.setSystemInfo("Java Version","1.8.0_131");
	}

}
