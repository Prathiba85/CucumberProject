package step_definition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;

public class simplilearn_loginstepdefinition {
	WebDriver driver = Hooks.driver;
	
	@Given("I have launched the application")
	public void i_have_launched_the_application() throws InterruptedException {
		driver.get("https://www.simplilearn.com/");
		Thread.sleep(5000);		
	    
	}

	@Given("I have clicked on login link")
	public void i_have_clicked_on_login_link() throws InterruptedException  {
		
			
		WebElement loginLink = driver.findElement(By.linkText("Log in"));
		loginLink.click();
	
	    
	}

	@When("I enter username")
	public void i_enter_usernae() {
		WebElement userName = driver.findElement(By.name("user_login"));
		userName.sendKeys("abc@xyz.com");

	    
	}

	@When("I enter password")
	public void i_enter_password() {
		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys("Abc@12345");

	   
	}

	@When("Click on login")
	public void click_on_login() throws InterruptedException {
 // Write code here that turns the phrase above into concrete actions
	    Thread.sleep(5000);
		WebElement loginBtn = driver.findElement(By.name("btn_login"));
		loginBtn.click();

	    
	}

	@Then("I should land on homepage")
	public void i_should_land_on_homepage() {
	    
	}

	@Then("I should get error message")
	public void i_should_get_error_message() {
		WebElement error = driver.findElement(By.className("error_msg"));
		String ActError = error.getText();
		String ExpError = "The email or password you have entered is invalid.";
		
		Assert.assertEquals(ActError, ExpError);;
	   
	}
	
	@When("I enter username as {string}")
	public void i_enter_username_as(String UserNameVal) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement userName = driver.findElement(By.name("user_login"));
		userName.sendKeys(UserNameVal);
	}

	@When("I enter password as {string}")
	public void i_enter_password_as(String PassVal) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys(PassVal);
	}

	@Then("I should get error message as {string}")
	public void i_should_get_error_message_as(String ExpError) throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
		WebElement error = driver.findElement(By.className("error_msg"));
		String ActError = error.getText();
		Assert.assertEquals(ActError, ExpError);  
	}




}
