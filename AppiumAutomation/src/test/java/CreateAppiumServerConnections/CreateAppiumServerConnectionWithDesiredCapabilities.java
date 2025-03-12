package CreateAppiumServerConnections;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.Test;
import io.appium.java_client.*;

public class CreateAppiumServerConnectionWithDesiredCapabilities {

	@Test
	public void createConnectionWithDC() throws MalformedURLException {

		// set capabilities for server

		DesiredCapabilities cap = new DesiredCapabilities();
		cap.setCapability("platformName", "Android");
		cap.setCapability("appium:automationName", "uiautomator2");// platform
		cap.setCapability("appium:deviceName", "medium_phone");

		/// Volumes/Renuka/Training_Materials/SA2411063/AppiumAutomation
		/// src/test/resources/ApiDemos-debug.apk

		String apkPath = System.getProperty("user.dir") + "//src//test//resources//ApiDemos-debug.apk";
		cap.setCapability("appium:app", apkPath);
		
		//server address
		URL url = new URL("http://127.0.0.1:4723");
		AppiumDriver ap = new AppiumDriver(url,cap);
		System.out.println("SessionID "+ ap.getSessionId());
		
		
		
		

	}
}
