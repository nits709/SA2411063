package httpsAPIMethods;

import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

/*   given() - pre-requisite
 *  headers/cookie/path/query parameter/payload(resources)/Authentication.
 *  
 *  when() - send the request 
 *  -------------------------
 *  GET | POST| PATCH |DELETE | PUT
 *  
 *  then()
 *  --------------------------------
 * status code / API response / Response payload (json path, format, time, null)/ status MSG 
 * 
 * log() method would print the response (body, header,cookie, all)
 */

public class GetTestAPI {

	@Test
	public void GetRequest_BDD() {

		given().when().get("https://reqres.in/api/users/2").then().statusCode(200).log().all();
		System.out.println("Single user validation is done!");

	}
	
	
	@Test
	public void getPageResponse() {
		//given().when().get("https://reqres.in/api/users?page=2").then().log().all();
		
		given().
		when().get("https://reqres.in/api/users?page=2").then().statusCode(200)
		.body("page",equalTo(2)) // 1 scenario - validation
		//.body("data.id",hasItems(7,8,9,10,11,12)) // 2 scenario - validation.
		//.body("data.id",hasItems(12,10,11,7,9,8)) // 3 scenario - validation
		.body("data.id",contains(7,8,9,10,11,12)) // 4 validation  check order sequence
		.body("data.id",contains(10,11,12,7,9,8)) // 5 validation check order sequence
		.log().body();
		
		
		
		
		
		
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
}
