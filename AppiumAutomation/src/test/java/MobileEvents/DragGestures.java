package MobileEvents;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import projectUtilities.appiumDriverInitialization;

public class DragGestures {
	@Test
	public void testDragGestures() {

		// create driver session.
		AppiumDriver testDriver = appiumDriverInitialization.createAppiumDriver();

		// views
		testDriver.findElement(AppiumBy.accessibilityId("Views")).click();
		;

		// gallery
		testDriver.findElement(AppiumBy.accessibilityId("Drag and Drop")).click();
		;

		// circle element
		WebElement circleElement = testDriver.findElement(AppiumBy.id("io.appium.android.apis:id/drag_dot_1"));
		;

		testDriver.executeScript("mobile: dragGesture",
				ImmutableMap.of("elementId", ((RemoteWebElement) circleElement).getId(), "endX", 699, "endY", 1017));

	}
}
