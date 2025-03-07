package authenticationTypes;

import static io.restassured.RestAssured.given;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.response.Response;

public class baseicAuthentication {

	@Test
	public void testbaseAuth() {
		System.out.println("Basic Authentication validation.");
			
				Response res = given()
				.auth().basic("postman","password")
				.when().get("https://postman-echo.com/basic-auth");
				
				//get the log
				res.then().log().body();
				
				boolean status = res.jsonPath().getBoolean("authenticated");
				Assert.assertEquals(status, true);
		
	}
	
	
	
}
