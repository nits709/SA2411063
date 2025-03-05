package httpsAPIMethods;

import static io.restassured.RestAssured.given;

import java.util.HashMap;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.response.Response;


// 1 POJO - plan old java object.(encapsulation [data + functions])

public class postRequestWithPayloads {
  @Test
  public void basicPayload() {
	  
	  Response res = given().body("{\n"
	  		+ "    \"name\": \"Nitin\",\n"
	  		+ "    \"job\": \"Automation Architect\"\n"
	  		+ "}")
			  .when().post("https://reqres.in/api/users");
	  
	  //validate the status code
	  Assert.assertEquals(res.getStatusCode(), 201);
	  System.out.println("status code " +res.getStatusCode());
			  
     	res.then().log().body();
			  
			  
  }
  
  
  @Test
  public void requestPayloadWithHasMap() {
	  HashMap<String,Object> data = new HashMap<String,Object>();
	  data.put("name", "Abhishek");
	  data.put("job","data Engineer");
	  
	  given().contentType("application/json")
	  .body(data)
	  .when().post("https://reqres.in/api/users")
	  .then().statusCode(201)
	  //.body("name",equalTo("Abhishek"))
	  .log().body();  
  }
  
  @Test
  public void postRequestPojoData() {
	  //payload
	  pojoData pData = new pojoData();
	  pData.setName("Priyanka");
	  pData.setJob("Technical trainer");
	  
	  given().contentType("application/json")
	  .body(pData)
	  .when().post("https://reqres.in/api/users")
	  .then().statusCode(201)
	  //.body("name",equalTo("Abhishek"))
	  .log().body(); 
	  
  }
  
  
  
  
  
  
  
  
  
  
  
  
}
