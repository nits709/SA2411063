package AndroidDevicesandAppiumFunctionsl;

import org.openqa.selenium.ScreenOrientation;
import org.testng.annotations.Test;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import projectUtilities.appiumDriverInitialization;

public class lock_UnclockFuctionsDevices {
	
	//lockDevice()
	//unlock()
	
  @Test
  public void testDevicesFunctions() throws InterruptedException {
	  
	  
	  AppiumDriver testDriver = appiumDriverInitialization.createAppiumDriver();
	  
	  
	   //lock the deivces  
	  	((AndroidDriver)testDriver).lockDevice();
	  	
	  	System.out.println("Lock the mobile");
	  	
	  	Thread.sleep(2000);
	  //lock the deivces  
	  	((AndroidDriver)testDriver).unlockDevice();
	  	
	  	System.out.println("unlock the mobile");
	  	
	  	((AndroidDriver)testDriver).rotate(ScreenOrientation.LANDSCAPE);
	  	
	  	System.out.println("rotate the mobile Landscape mode");
	  	
	  	Thread.sleep(2000);
	  	
	  	((AndroidDriver)testDriver).rotate(ScreenOrientation.PORTRAIT);
	  	System.out.println("rotate the mobile portrait mode");
	  	
	  	// turn on MobileData
	  	//turn off mobileData
	  	// turn on wifi
	  	//trun on wifi
	  	//turn off toggleAiroplaneMode
	  	//turn on toggleAiroplaneMode
	  	
	  
  }
}
