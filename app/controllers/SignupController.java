package controllers;

import model.Customer;
import play.data.Form;
import play.mvc.*;
import play.data.FormFactory;

import javax.inject.Inject;

/**
 * Created by james on 3/10/17.
 */
public class SignupController extends Controller{

    @Inject
    FormFactory formFactory;

//    @Inject
//    public SignupController(FormFactory formFactory) {
//        this.signupForm =  formFactory.form(Customer.class).bindFromRequest().get();;
//
//    }




    public Result signup() {
        //Form<Customer> userForm = formFactory.form(Customer.class);
        Customer customer = formFactory.form(Customer.class).bindFromRequest().get();
        System.out.print("testin signup");
        if(customer.findCustomer(customer.email)){
            //then go back to page and advise email in use
            return redirect("/dollarLuxuryHome");

        }else{
            //email is not in use proceed with adding customer.
            customer.save();


        }

        //first check that customer has not sigend up

        return ok();
    }
}
