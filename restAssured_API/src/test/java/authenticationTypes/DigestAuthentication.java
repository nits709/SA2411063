package authenticationTypes;

import static io.restassured.RestAssured.given;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.response.Response;

public class DigestAuthentication {

	
	@Test
	public void testDigesrAuth() {
		System.out.println("Digest Authentication validation.");
		
		
		Response res = given()
				.auth().digest("postman","password")
				.when().get("https://postman-echo.com/basic-auth");
		
		res.then().log().body();
						
		boolean status = res.jsonPath().getBoolean("authenticated");
		Assert.assertEquals(status, true);
	}
}
