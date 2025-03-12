package MobileEvents;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import projectUtilities.appiumDriverInitialization;

public class longClickGestures {
  @Test
  public void testLongClick() {
	  
	  // create driver session.
	  AppiumDriver testDriver = appiumDriverInitialization.createAppiumDriver();
	  
	  //view element
	  testDriver.findElement(AppiumBy.accessibilityId("Views")).click();
	  
	  //drag and drop element
	  testDriver.findElement(AppiumBy.accessibilityId("Drag and Drop")).click();
	  
	  //firs circle element
	  WebElement dragndrop = testDriver.findElement(AppiumBy.id("io.appium.android.apis:id/drag_dot_1"));
	  
	  // do long click by using gesture function
	  testDriver.executeScript("mobile: longClickGesture", ImmutableMap.of(
			  "elementId", ((RemoteWebElement)dragndrop).getId()));
	  
	  System.out.println("long click done successfully!");
	  
  }
}
