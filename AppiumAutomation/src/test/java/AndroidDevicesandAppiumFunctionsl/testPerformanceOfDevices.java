package AndroidDevicesandAppiumFunctionsl;

import java.util.List;

import org.testng.annotations.Test;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import projectUtilities.appiumDriverInitialization;

public class testPerformanceOfDevices {

	
	@Test
	public void testPerformance() {
		AppiumDriver testDriver = appiumDriverInitialization.createAppiumDriver();
		
		List<String> allPackages = ((AndroidDriver)testDriver).getSupportedPerformanceDataTypes();
		
		System.out.println(allPackages);
		//[cpuinfo, memoryinfo, batteryinfo, networkinfo]
		
		String currentPackage =((AndroidDriver)testDriver).getCurrentPackage();
		System.out.println("currentPackage "+currentPackage);
		
		//batterInfo.
		List<List<Object>> batteryinfo = ((AndroidDriver)testDriver).
				getPerformanceData(currentPackage, "batteryinfo", 5);
		
		System.out.println("batteryinfo " + batteryinfo);
		System.out.println("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
		
		
		List<List<Object>> networkinfo = ((AndroidDriver)testDriver).
				getPerformanceData(currentPackage, "networkinfo", 5);
		
		System.out.println("networkinfo " + networkinfo);
		System.out.println("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
		
		
		List<List<Object>> memoryinfo = ((AndroidDriver)testDriver).
				getPerformanceData(currentPackage, "memoryinfo", 5);
		
		System.out.println("memoryinfo " + memoryinfo);
		System.out.println("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
		
		
		
		List<List<Object>> cpuinfo = ((AndroidDriver)testDriver).
				getPerformanceData(currentPackage, "cpuinfo", 5);
		
		System.out.println("cpuinfo " + cpuinfo);
		System.out.println("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
		
		
	}
}
