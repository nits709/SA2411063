package MobileEvents;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import projectUtilities.appiumDriverInitialization;

public class swipeGestures {
	@Test
	public void testSwipeGestures() {

		// create driver session.
		AppiumDriver testDriver = appiumDriverInitialization.createAppiumDriver();

		// views
		testDriver.findElement(AppiumBy.accessibilityId("Views")).click();
		;

		// gallery
		testDriver.findElement(AppiumBy.accessibilityId("Gallery")).click();
		;

		// photos
		testDriver.findElement(AppiumBy.accessibilityId("1. Photos")).click();
		;

		// scroll on photos
		WebElement area = testDriver.findElement(AppiumBy.id("io.appium.android.apis:id/gallery"));

		testDriver.executeScript("mobile: swipeGesture",
				ImmutableMap.of("elementId", ((RemoteWebElement) area).getId(), "direction", "left", "percent", 1.0));

	}
}
