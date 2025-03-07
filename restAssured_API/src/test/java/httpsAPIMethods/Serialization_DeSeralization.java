package httpsAPIMethods;

import org.testng.annotations.Test;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import groovy.transform.stc.POJO;

public class Serialization_DeSeralization {

	
	@Test
	public void serializationTest() throws JsonProcessingException {

		// data in java object format.
		pojoData pdata = new pojoData();
		pdata.setName("Ketaki Rane");
		pdata.setJob("QA Engineer");  // java format
		

		// Mapper class for conversion
		ObjectMapper objMap = new ObjectMapper();
		String jsondata = objMap.writerWithDefaultPrettyPrinter().writeValueAsString(pdata); // return data in form of json
		System.out.println("Json data " + jsondata);
	}
	
	@Test
	public void deSerializationTest() throws JsonMappingException, JsonProcessingException {  // convert my data from json format to java format.
		String jData = "{\n"
				+ "  \"name\" : \"Ketaki Rane\",\n"
				+ "  \"job\" : \"QA Engineer\"\n"
				+ "}";
		
		// convert data from json to java object.
		ObjectMapper objMap = new ObjectMapper();
		pojoData pojo = objMap.readValue(jData,pojoData.class);
		
		System.out.println("Data "+ pojo.getJob());
		System.out.println("Data "+ pojo.getName());
		
		
		
		
	}
	

}
