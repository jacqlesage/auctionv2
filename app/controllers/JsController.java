package controllers;



import com.fasterxml.jackson.databind.JsonNode;

import model.Customer;
import model.AuctionDAO;
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
                routes.javascript.HomeController.uploadFile(),
                routes.javascript.JsController.findCustomerByEmail()

        ));
    }


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

    public Result findActiveAuction(){

        System.out.println("inside finding an active auction!!!!!!");
        AuctionDAO aDAO = null;
        JsonNode auctionDAO = null;
        Result result;

        result = aDAO.getActiveAuction();

        System.out.println();
        System.out.println(result.toString() + " inside find active still");
        System.out.println();

        if (result == null) {
            result = notFound(String.format("There is no active auction"));
            return result;
        } else {

            return result;
        }


    }



}





