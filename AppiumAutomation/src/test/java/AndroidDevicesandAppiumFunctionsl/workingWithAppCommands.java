package AndroidDevicesandAppiumFunctionsl;

import java.time.Duration;

import org.testng.annotations.Test;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import projectUtilities.appiumDriverInitialization;

public class workingWithAppCommands {
  @Test
  public void testAppsCommands() throws InterruptedException {
	  
	  
	  //create the session and launch the application.
	  AppiumDriver testDriver = appiumDriverInitialization.createAppiumDriver();
	  
	  
	  //this commands would return the current package name.
	  String currentPackage =((AndroidDriver)testDriver).getCurrentPackage();
	  System.out.println("currentPackage "+currentPackage);
	  
	  //this tells the current state of my application
	   System.out.println("tell the current status : "   + ((AndroidDriver)testDriver).queryAppState(currentPackage));
	   
	   Thread.sleep(1500);
	   //terminate the App
	   ((AndroidDriver)testDriver).terminateApp(currentPackage);
	   System.out.println( "Application terminate status "+((AndroidDriver)testDriver).queryAppState(currentPackage));
	   
	   Thread.sleep(5000);
	   
	   //activate APP
	   ((AndroidDriver)testDriver).activateApp(currentPackage);
	   System.out.println( "Application activate status "+((AndroidDriver)testDriver).queryAppState(currentPackage));
	   
	   
	 //uninstall APP
	   ((AndroidDriver)testDriver).removeApp(currentPackage);
	   Thread.sleep(5000);
	   System.out.println( "Application uninstall status "+((AndroidDriver)testDriver).queryAppState(currentPackage));
	   
	   
	   String apkPath = System.getProperty("user.dir") + "//src//test//resources//ApiDemos-debug.apk";
	 //install APP
	   ((AndroidDriver)testDriver).installApp(apkPath);
	   Thread.sleep(5000);
	   System.out.println( "Application installation status "+((AndroidDriver)testDriver).queryAppState(currentPackage));
	   
	   
	   
	   //activate APP
	   ((AndroidDriver)testDriver).activateApp(currentPackage);
	   System.out.println( "Application activate status "+((AndroidDriver)testDriver).queryAppState(currentPackage));
	   
	   
	   //background APP 
	   ((AndroidDriver)testDriver).runAppInBackground(Duration.ofSeconds(5));
	   System.out.println( "Application background status "+((AndroidDriver)testDriver).queryAppState(currentPackage));
	   
	  
	  
	  
	  
	  
	  
	  
  }
}
