package httpsAPIMethods;

import static io.restassured.RestAssured.given;

import org.testng.annotations.Test;

import io.restassured.response.Response;
public class cookiesTest {
  @Test
  public void getALLCookies() {
	  given()
	  .when().get("http://google.co.in")
	  .then()
	  .log().cookies();  
  }
  
  @Test
  public void getCookiesFromResponse() {
	  
	  //AVcja2f_h6G5oKfY0MVckFH_fLR0JSItOav_haSAU3VL-
	  //AVcja2dkSxI5bccZ-sfJav8MBe2QdA-
	  Response res = given()
	  .when().get("http://google.co.in");
	  
	  System.out.println(" Cookies Value " + res.getCookie("AEC"));
	    
  }
}
