package controllers;

import controllers.routes.javascript;
import model.Customer;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import play.routing.JavaScriptReverseRouter;

import static play.mvc.Results.ok;

/**
 * Created by james on 26/12/17.
 */

public class JsRouterController extends Controller {


    public Result javascriptRoutes() {
        return ok(
                JavaScriptReverseRouter.create("jsRoutes",
                        controllers.routes.javascript.JsRouterController.toString()

                )
        ).as("text/javascript");
    }

    public static Result findCustomer(String email) {

        if (Customer.find.query().where().eq("email", email).findUnique() == null) {
            //then customer is not in DB

            return ok(Json.toJson(email));
        }

        return ok(Json.toJson("No email found"));
    }
}

