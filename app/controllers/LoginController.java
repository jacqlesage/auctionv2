package controllers;

import play.mvc.Controller;
import model.Customer;
import play.data.Form;
import play.libs.Json;
import play.mvc.*;
import play.data.FormFactory;

import javax.inject.Inject;

/**
 * Created by james on 29/10/17.
 */
public class LoginController extends Controller {

    @Inject
    FormFactory formFactory;

    public Result login() {
        //Form<Customer> userForm = formFactory.form(Customer.class);
        Customer customer = formFactory.form(Customer.class).bindFromRequest().get();
        System.out.print(customer.toString());

        customer = Customer.findCustomerByEmail(customer.email);
        System.out.print(customer.toString());
        //check the password

        session().remove("connected");

        //add customer to the session
        session().put("firstName", customer.firstName);
        session().put("email", customer.email);
        session().put("cusNum", Integer.toString(customer.id));

        return ok(Json.toJson(customer));
    }

}
