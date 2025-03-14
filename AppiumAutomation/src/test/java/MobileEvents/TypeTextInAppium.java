package MobileEvents;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;
import projectUtilities.appiumDriverInitialization;
import projectUtilities.functionUtilities;

public class TypeTextInAppium {

	@Test
	public void testTypetextOnFields() {
		// create driver session.
		AppiumDriver testDriver = appiumDriverInitialization.createAppiumDriver();

		// views
		testDriver.findElement(AppiumBy.accessibilityId("Views")).click();

		// area
		WebElement area = testDriver.findElement(AppiumBy.id("android:id/list"));

		// scroll 2/3 times on screen
		functionUtilities.scrollUpToUserCount(testDriver, area, 3);

		testDriver.findElement(AppiumBy.accessibilityId("TextFields")).click();

//		WebElement textFields = testDriver.findElement(AppiumBy.id("io.appium.android.apis:id/edit"));
//		textFields.sendKeys("Appium Is WebdriverBased Library");
		
		
		// Android keyboard Automation.
		
		((AndroidDriver)testDriver).pressKey(new KeyEvent(AndroidKey.H));
		((AndroidDriver)testDriver).pressKey(new KeyEvent(AndroidKey.E));
		((AndroidDriver)testDriver).pressKey(new KeyEvent(AndroidKey.L));
		((AndroidDriver)testDriver).pressKey(new KeyEvent(AndroidKey.L));
		((AndroidDriver)testDriver).pressKey(new KeyEvent(AndroidKey.O));
		((AndroidDriver)testDriver).pressKey(new KeyEvent(AndroidKey.A));
		((AndroidDriver)testDriver).pressKey(new KeyEvent(AndroidKey.L));
		((AndroidDriver)testDriver).pressKey(new KeyEvent(AndroidKey.L));
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

	}

}
