package locatorStrategy;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.AppiumDriver;
import projectUtilities.appiumDriverInitialization;

public class testMobileLocator {

	@Test
	public void testLocator() throws InterruptedException {

		AppiumDriver testDriver = appiumDriverInitialization.createAppiumDriver();
		WebElement ele1 = testDriver.findElement(AppiumBy.accessibilityId("Access'ibility"));
		System.out.println("Element First " + ele1.getText());
		ele1.click();

		Thread.sleep(3000);

		testDriver.navigate().back();

		// locator 2
		WebElement ele2 = testDriver.findElement(AppiumBy.androidUIAutomator("new UiSelector().text(\"Animation\")"));
		System.out.println("Element Second :" + ele2.getText());
		ele2.click();

		Thread.sleep(3000);

		testDriver.navigate().back();

		WebElement ele3 = testDriver.findElement(AppiumBy.xpath("//android.widget.TextView[@content-desc=\"App\"]"));
		System.out.println("Element Third : " + ele3.getText());
		ele3.click();

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
