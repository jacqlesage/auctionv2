package controllers;

import model.Customer;
import play.data.Form;
import play.libs.Json;
import play.mvc.*;
import play.data.FormFactory;

import javax.inject.Inject;

/**
 * Created by james on 3/10/17.
 */
public class SignupController extends Controller{

    @Inject
    FormFactory formFactory;

    DollarLuxuryHomeController dollarLuxuryHomeController;

//    @Inject
//    public SignupController(FormFactory formFactory) {
//        this.signupForm =  formFactory.form(Customer.class).bindFromRequest().get();;
//
//    }




    public Result signup() {
        //Form<Customer> userForm = formFactory.form(Customer.class);
        Customer customer = formFactory.form(Customer.class).bindFromRequest().get();
//        System.out.print("testin signup");
        customer.save();
        //System.out.println("@@@@@@@@@@@@@@" + customer.firstName);
        //add customer to the session
        session().put("firstName", customer.firstName);
        session().put("lastName", customer.lastName);
        session().put("email", customer.email);
        session().put("customerNumber", Integer.toString(customer.id));
        //session("connected", Json.toJson(customer).toString());
        //changeView();

        return ok("passed jsRoutes");
    }

    public Result changeView(){

        return redirect(routes.DollarLuxuryHomeController.dollarDashboard());
    }
}
