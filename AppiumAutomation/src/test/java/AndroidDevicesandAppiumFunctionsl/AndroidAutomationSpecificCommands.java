package AndroidDevicesandAppiumFunctionsl;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import projectUtilities.appiumDriverInitialization;

public class AndroidAutomationSpecificCommands {
	
  @Test
  public void testNetworkSetup() throws InterruptedException
  {
	  
	  AppiumDriver testDriver = appiumDriverInitialization.createAppiumDriver();
	  
	  WebElement arrowEleemnt = testDriver.findElements(AppiumBy.id("com.android.systemui:id/chevron")).get(0);
	  arrowEleemnt.click();
	  
	  
	  //ON --- OFF
	  ((AndroidDriver)testDriver).toggleWifi();
	  
	  Thread.sleep(2000);
	  
	  //off -- On
	  ((AndroidDriver)testDriver).toggleWifi();
	  
	  Thread.sleep(2000);
	  
	  
	  //On -- OFF

	  ((AndroidDriver)testDriver).toggleData();
	  
      Thread.sleep(2000);
	  
	  
	  //OFF -- ON
	  ((AndroidDriver)testDriver).toggleData();
	  
	  Thread.sleep(2000);
	  
	  
	  
	  testDriver.findElement(AppiumBy.androidUIAutomator("new UiSelector().text(\"Airplane mode\")")).click();
	  
	  
	  // open the notification from mobile. // 
	  ((AndroidDriver)testDriver).openNotifications();
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
  }
}
