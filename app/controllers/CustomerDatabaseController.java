package controllers;

import akka.stream.impl.JsonObjectParser;
import com.fasterxml.jackson.databind.JsonNode;

import model.Customer;
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
        //put it back into a json format
        JsonNode j = Json.parse(obj);

        //call from the controller to the update method for the customer
        Customer customer = new Customer();

        customer.changeCustomerDetails(Json.toJson(j));

//        System.out.println("inside update customer " + obj.toString());
//        System.out.println("inside update customer json" + Json.toJson(j));
//        System.out.println("inside update customer json" + j.get("updatedPhoneNumber"));
//can return the Json.toJson directly but I cannot put it in a json object on its own and then pass it
        //return it as a json object to success then I can call each of the "names" in the J.S file.
        return ok(Json.toJson(j));
    }

}