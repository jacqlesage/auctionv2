package controllers;

import play.data.FormFactory;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

import javax.inject.Inject;

public class CustomerDatabaseController extends Controller {

    @Inject
    FormFactory formFactory;

    public Result updateCustomerPersonalDetails(String obj){

        System.out.println("inside update customer controller *******");


        return ok(Json.toJson(obj));
    }

}
