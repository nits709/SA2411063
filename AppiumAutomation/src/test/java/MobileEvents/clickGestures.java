package MobileEvents;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import projectUtilities.appiumDriverInitialization;

public class clickGestures {
  @Test
  public void testClickGestures() {
	  
	  
	  // create driver session.
	  AppiumDriver testDriver = appiumDriverInitialization.createAppiumDriver();
	  
	  WebElement ele1 =testDriver.findElement(AppiumBy.accessibilityId("Accessibility"));
	  
	 //accessiblity link
	  
	  testDriver.executeScript("mobile: clickGesture", ImmutableMap.of(
			  "elementId", ((RemoteWebElement)ele1).getId()
			  	));
	  
	  //print the successfull message.
	  
	  System.out.println("click gesture has done successfully!");
  }
}
