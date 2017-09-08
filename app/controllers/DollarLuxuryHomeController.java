package controllers;

import play.mvc.*;


import static play.mvc.Results.ok;

/**
 * Created by james on 8/09/17.
 */
public class DollarLuxuryHomeController extends Controller{

    public Result dollarHomePage() {



        return ok(views.html.dollarLuxuryHome.render());
    }
}
