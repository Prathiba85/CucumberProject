package step_definition;

import java.util.List;

import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class calculator_step_definition {
	int num1;
	int num2;
	int result;
	List<Integer> values;
	
	@Given("I have two numbers {int} and {int}")
	public void i_have_two_numbers_and(int num1, int num2) {
	    this.num1=num1;
	    this.num2=num2;
	    
	   
	}

	@When("I add those two numbers")
	public void i_add_those_two_numbers() {
	    // Write code here that turns the phrase above into concrete actions
	    result = num1+num2;
	}

	@Then("I should get the result as {int}")
	public void i_should_get_the_result_as(int expected_result) {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(expected_result, result);
	    
	}

	@When("I sub those two numbers")
	public void i_sub_those_two_numbers() {
	    // Write code here that turns the phrase above into concrete actions
		 result = num1-num2;
	   
	}
	@Given("I have below numbers")
	public void i_have_below_numbers(List <Integer> numbers) {
		
	this.values=numbers;
	
	
	    
	}

	@When("I add those  numbers")
	public void i_add_those_numbers() {
		for(Integer a:values)
		{
			result = result+a;
		}
			
	    
	}



}
