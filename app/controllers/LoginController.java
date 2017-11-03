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
        System.out.print("testin login");

        //check the password



        //add customer to the session
        session("connected", Json.toJson(customer).toString());

        return ok(Json.toJson(customer));
    }

}
