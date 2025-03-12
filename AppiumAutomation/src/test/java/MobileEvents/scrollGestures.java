package MobileEvents;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import projectUtilities.appiumDriverInitialization;


public class scrollGestures {

	@Test
	public void testScroll() {
		
		// create driver session.
		  AppiumDriver testDriver = appiumDriverInitialization.createAppiumDriver();
		  
		  //views
		 testDriver.findElement(AppiumBy.accessibilityId("Views")).click();;
		  
		  //get the locator of area
		  WebElement area = testDriver.findElement(AppiumBy.id("android:id/list"));
		  
		  //scroll
		  
//		  testDriver.executeScript("mobile: scrollGesture",ImmutableMap.of(
//				  "elementId",((RemoteWebElement)area).getId(),
//				  "direction", "down",
//				  "percent", 1.0)
//				 );
		  
		  
		  System.out.println("scroll gestures done successfully!");
		  
		  
		  
	}
}
