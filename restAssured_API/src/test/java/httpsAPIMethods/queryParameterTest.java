package httpsAPIMethods;

import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;


			//https://reqres.in/api/users?page=2
			// protocol:domain/pathParameter?queryParamter

public class queryParameterTest {
	
  @Test
  public void queryPathParameter() {
	  
	  given()
	  .pathParam("path","users")
	  .queryParam("page","1")
	  .when()
	  .get("https://reqres.in/api/{path}")
	  .then().statusCode(200)
	  .log().all();
	    
  }
}
