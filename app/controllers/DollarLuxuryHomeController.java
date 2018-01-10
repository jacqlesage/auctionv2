package controllers;

import model.Customer;
import play.data.FormFactory;
import play.libs.Json;
import play.mvc.*;


import javax.inject.Inject;

import static play.mvc.Results.ok;

/**
 * Created by james on 8/09/17.
 */
public class DollarLuxuryHomeController extends Controller{

    @Inject
    FormFactory formFactory;

    public Result loadDollarDashboard(String email) {

        System.out.println(email + " in load dashboard thing");
        //populate dashboard with 1) customer info


        return ok(views.html.dollarLuxuryDashboard.render());
    }

    public Result dollarHomePage() {

        return ok(views.html.dollarLuxuryHome.render());
    }

    public Result dollarDashboard() {

//        Customer cus = formFactory.form(Customer.class).bindFromRequest().get();
//
//        cus = cus.findCustomerByEmail(cus.email);
//
//        String x = cus.email;
//        System.out.println(x + "%%%%####");
//
//        session().put("customerFull", x);

        return ok(views.html.dollarLuxuryDashboard.render());
        //return redirect(routes.DollarLuxuryHomeController.dollarDashboard());
    }
}
