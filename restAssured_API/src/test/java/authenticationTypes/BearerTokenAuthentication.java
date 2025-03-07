package authenticationTypes;

import org.testng.annotations.Test;

import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

public class BearerTokenAuthentication {

	
	//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
	
	
	@Test
	public void bearerTokenTest() {
		
		System.out.println("validate bearer token authentication");
		
		String token = "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";
		
		Response res = given()
				.header("Authorization","Bearer "+token)
				.when().get("https://api.github.com/user/repos");
		
		res.then().log().body();
								
		
		
	}
}
