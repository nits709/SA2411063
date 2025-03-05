package httpsAPIMethods;

import static io.restassured.RestAssured.given;

import org.testng.annotations.Test;

import io.restassured.response.Response;

public class HeadersTest {
  @Test
  public void getALLHeader() {
	  
	  given()
	  .when().get("http://google.co.in")
	  .then()
	  .log().headers(); 
	  
	  
  }
  
  @Test
  public void  getSpecificHeaderFromResponse() {
	 Response res = given()
	  .when().get("http://google.co.in");
	 
	 
	 
	 System.out.println("Print Header "+ res.getHeader("Content-Type"));
	 System.out.println("Print Header "+ res.getHeader("Set-Cookie"));
  }
}
