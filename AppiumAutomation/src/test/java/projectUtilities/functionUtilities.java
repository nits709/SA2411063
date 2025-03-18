package projectUtilities;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.remote.RemoteWebElement;

import com.google.common.collect.ImmutableMap;

import io.appium.java_client.AppiumDriver;

public class functionUtilities {
	
	public static void getScreenshot(AppiumDriver driver, String name) {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File temp = ts.getScreenshotAs(OutputType.FILE);
		File dest = new File(
				System.getProperty("user.dir") + "//Screenshots//" + name + System.currentTimeMillis() + ".png");

		try {
			FileHandler.copy(temp, dest);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

 public static void scrollUpToUserCount(AppiumDriver testDriver, WebElement area, int count) {

	for (int i = 1; i <= count; i++) {
			testDriver.executeScript("mobile: scrollGesture", ImmutableMap.of("elementId",
					((RemoteWebElement) area).getId(), "direction", "down", "percent", 1.0));
			System.out.println("Iteration is " + i);
		}
	}

	public static void scrollUp(AppiumDriver testDriver, WebElement area) {
		testDriver.executeScript("mobile: scrollGesture",
				ImmutableMap.of("elementId", ((RemoteWebElement) area).getId(), "direction", "up", "percent", 1.0));
	}
	
	public static void scrollDown(AppiumDriver testDriver, WebElement area) {
		testDriver.executeScript("mobile: scrollGesture",
				ImmutableMap.of("elementId", ((RemoteWebElement) area).getId(), "direction", "down", "percent", 1.0));
	}
	
	public static void scrollLeft(AppiumDriver testDriver, WebElement area) {
		testDriver.executeScript("mobile: scrollGesture",
				ImmutableMap.of("elementId", ((RemoteWebElement) area).getId(), "direction", "left", "percent", 1.0));
	}
	
	public static void scrollRight(AppiumDriver testDriver, WebElement area) {
		testDriver.executeScript("mobile: scrollGesture",
				ImmutableMap.of("elementId", ((RemoteWebElement) area).getId(), "direction", "right", "percent", 1.0));
	}
}
