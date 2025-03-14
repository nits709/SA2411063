package projectUtilities;

import java.net.MalformedURLException;
import java.net.URL;

import org.testng.annotations.Test;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;

public class appiumDriverInitialization {

	public static AppiumDriver driver;
	@Test
	public static AppiumDriver createAppiumDriver() {
		
		UiAutomator2Options auto = new UiAutomator2Options();
		  
		String apkPath = System.getProperty("user.dir") + "//src//test//resources//ApiDemos-debug.apk";
		auto.setCapability("appium:app", apkPath);
		
		//server address
		
		try {
		URL	url = new URL("http://127.0.0.1:4723");
			 driver = new AndroidDriver(url,auto);
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return driver;
	}
	
	
}
