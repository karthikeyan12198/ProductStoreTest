package com.ProductStore.pagesobjects;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class DescriptionPage {
	WebDriver driver;
//To launch the browser
	public void launchBrowser(String browser) { 
		try {
			if(browser.equalsIgnoreCase("chrome"))
			{
				System.setProperty("webdriver.chrome.driver","src//test//resources//Driver//chromedriver");
				driver = new ChromeDriver();
			}
			else if(browser.equalsIgnoreCase("firefox"))
			{
				System.setProperty("webdriver.chrome.driver","src//test//resources//Driver//geckodriver.exe");
				driver = new FirefoxDriver();
			}
			else if(browser.equalsIgnoreCase("internetexplorer"))
			{
				System.setProperty("webdriver.chrome.driver","src//test//resources//Driver//IEDriverserver.exe");
				driver=new InternetExplorerDriver();
			}
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		}
		catch(WebDriverException e) 
		{
			System.out.println("Browser cannot be launched");
		}
	}
//To open product store homepage
	public void productStore() 
	{
		driver.get("https://www.demoblaze.com/");
		System.out.println(driver.getTitle());
	}
//To get the description of the product 
	public void getDescription() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id=\"tbodyid\"]/div[5]/div/div/h4/a")).click();
		Thread.sleep(3000);
		String s=driver.findElement(By.xpath("//*[@id=\"tbodyid\"]/h2")).getText();
	    System.out.println("Product description");
	    String s2=driver.findElement(By.xpath("//*[@id=\"more-information\"]/p")).getText();
	    System.out.println(s);
	    System.out.println(s2);
	    Thread.sleep(3000);
	}
	
	public void screenshotone(String path) throws IOException {
		TakesScreenshot takes=((TakesScreenshot)driver);
		File source=takes.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(source, new File(path));
	}	
	
//To close the browser
	public void exitBrowser() {
		driver.close();
	}
}
