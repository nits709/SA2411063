package locatorStrategy;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import projectUtilities.appiumDriverInitialization;
import projectUtilities.functionUtilities;

public class testMobileLocator {

	@Test
	public void testLocator() throws InterruptedException {

		AppiumDriver testDriver = appiumDriverInitialization.createAppiumDriver();
		WebElement ele1 = testDriver.findElement(AppiumBy.accessibilityId("Access'ibility"));
		String eleName = ele1.getText();
		ele1.click();

		functionUtilities.getScreenshot(testDriver, eleName);
		Thread.sleep(3000);

		testDriver.navigate().back();
		
		

		// locator 2
		WebElement ele2 = testDriver.findElement(AppiumBy.androidUIAutomator("new UiSelector().text(\"Animation\")"));
		String eleName1  = ele2.getText();
		ele2.click();

		functionUtilities.getScreenshot(testDriver, eleName1);
		Thread.sleep(3000);

		testDriver.navigate().back();
		

		WebElement ele3 = testDriver.findElement(AppiumBy.xpath("//android.widget.TextView[@content-desc=\"App\"]"));
		String eleName2 = ele3.getText();
		ele3.click();

		functionUtilities.getScreenshot(testDriver, eleName2);
		Thread.sleep(3000);

		testDriver.navigate().back();
		

		WebElement ele4 = testDriver.findElements(AppiumBy.className("android.widget.TextView")).get(5);// single element from findelements functions
		System.out.println("Fourth Element :" + ele4.getText());
		ele4.click();

		Thread.sleep(3000);

		testDriver.navigate().back();
		
		WebElement ele5 = testDriver.findElements(AppiumBy.id("android:id/text1")).get(11);
		System.out.println("fifth Element "+ ele5.getText());
		ele5.click();
		
		Thread.sleep(3000);
		
		testDriver.navigate().back();

		
		
		
		
	}
}
