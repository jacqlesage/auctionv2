package controllers;

import play.mvc.Controller;
import model.Customer;
import play.data.Form;
import play.libs.Json;
import play.mvc.*;
import play.data.FormFactory;

import javax.inject.Inject;
import java.util.Map;

/**
 * Created by james on 29/10/17.
 */
public class
LoginController extends Controller {

    @Inject
    FormFactory formFactory;
    //Post data seems to be needing this sort of form setup to get it ? Map<String, String[]> form_values = request().body().asFormUrlEncoded();
    //not fully sure why as yet - I suspect that I not yet fully using Play froms in 2.6 to their fullest.
    public Result login() {

        //System.out.println(userForm.toString() + "@@@!@!@!@!@!@");
        Customer customer = formFactory.form(Customer.class).bindFromRequest().get();
        Map<String, String[]> form_values = request().body().asFormUrlEncoded();
        System.out.println(customer.email+ " ");
        System.out.println(customer.password + " ");
        System.out.println("!!!!" + form_values.get("emailFromLogin")[0]);
        System.out.println("!!!!" + form_values.get("passwordFromLogin")[0]);
        System.out.println("!!!!" + form_values.get("test")[2]);
        customer = Customer.findCustomerByEmail(customer.email);
        System.out.print(customer.toString() + " ");
        //check the password

        session().remove("connected");

        //add customer to the session
        session().put("firstName", customer.firstName);
        session().put("email", customer.email);
        session().put("cusNum", Integer.toString(customer.id));

        return ok(views.html.dollarLuxuryDashboard.render());

    }

    public Result logout(){

        session().clear();

        return ok(views.html.index.render());

    }

}
