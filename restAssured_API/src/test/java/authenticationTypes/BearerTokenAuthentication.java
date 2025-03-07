package authenticationTypes;

import org.testng.annotations.Test;

import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

public class BearerTokenAuthentication {

	
	@Test
	public void bearerTokenTest() {
		
		System.out.println("validate bearer token authentication");
		
		String token = "kindly use github account token";
		
		Response res = given()
				.header("Authorization","Bearer "+token)
				.when().get("https://api.github.com/user/repos");
		
		res.then().log().body();
								
		
		
	}
}
