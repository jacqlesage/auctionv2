package controllers;



import com.fasterxml.jackson.databind.JsonNode;
import model.Customer;
import model.UploadFilePathDAO;
import play.data.FormFactory;
import play.libs.Json;
import play.routing.JavaScriptReverseRouter;
import play.mvc.*;

import javax.inject.Inject;
import javax.swing.*;
import java.awt.*;
import java.io.File;
import java.io.IOException;

/**
 * Created by james on 30/12/17.
 */
public class JsController extends Controller {

    @Inject
    FormFactory formFactory;

    public Result javascriptRoutes() {

        return ok(JavaScriptReverseRouter.create("jsRoutes",
                routes.javascript.JsController.findCustomerByEmail(),
                routes.javascript.HomeController.uploadFile()
//                routes.javascript.JsController.getAllUsers()
        ));
    }




//    public Result getAllUsers(){
//        String jsonNode = null;
//        Customer customer = new Customer();
//        jsonNode = customer.getAllCustomers();
//        return ok(jsonNode);
//
//    }

    public Result findCustomerByEmail(String email) {

        Result result;
        JsonNode jsonNode;

        if (email.isEmpty()) {
            result = notFound(String.format("There is no email address supplied"));
            return result;
        } else {
            jsonNode = Json.toJson(Customer.findCustomerByEmail(email));

            return ok(jsonNode);
        }
    }


}





