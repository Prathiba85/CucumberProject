package step_definition;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions (
		monochrome=true,
		plugin= {"pretty","html:target/html-cucumber","json:target/cucumber.json"},
		features = "src/test/java/features",
		glue="step_definition",
		//tags= {"@WIP"}
		//tags={"Sanity"}
		//tags={"@Regression","@Sanity"}
			//	tags={"@Regression or @Sanity"}
				//tags={"@Regression and @Sanity"}
		//tags= {"@Calculator"} //feature level tag
		tags = {"@Browser and not @WIP"}
		)
public class TestRunner {
	

}
