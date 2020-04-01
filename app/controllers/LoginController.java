package controllers;

import akka.stream.impl.JsonObjectParser;
import com.fasterxml.jackson.databind.JsonNode;
import model.LoginDAO;
import play.api.libs.json.jackson.JacksonJson;
import play.mvc.Controller;
import model.Customer;
import play.data.Form;
import play.libs.Json;
import play.mvc.*;
import play.data.FormFactory;

import javax.inject.Inject;
import java.util.Map;

/**
 * Created by james on 29/10/17.
 */
public class
LoginController extends Controller {

    @Inject
    FormFactory formFactory;
    //Post data seems to be needing this sort of form setup to get it ? Map<String, String[]> form_values = request().body().asFormUrlEncoded();
    //not fully sure why as yet - I suspect that I am not yet fully using Play forms in 2.6 to their fullest.
    public Result login() {

        //System.out.println(userForm.toString() + "@@@!@!@!@!@!@");
        Customer customer = formFactory.form(Customer.class).bindFromRequest().get();
        Map<String, String[]> form_values = request().body().asFormUrlEncoded();

        System.out.println("!!!!" + form_values.get("emailFromLogin")[0]);
        System.out.println("!!!!" + form_values.get("passwordFromLogin")[0]);

        customer = Customer.findCustomerByEmail(form_values.get("emailFromLogin")[0]);
        System.out.print(customer.toString() + "customer found ");
        //check the password

        session().remove("connected");

        //add customer to the session
        session().put("firstName", customer.firstName);
        session().put("email", customer.email);
        session().put("cusNum", Integer.toString(customer.id));

        return ok(views.html.index.render());

    }

    public Result logout(){

        session().clear();

        return ok(views.html.index.render());

    }

    public Result findCustomerInLoginTable(String email){
        System.out.println("*&*&*&^%%%%% in findCustomerInLoginTable email  = " + email);

       JsonNode x = Json.parse(email);

       String y = x.get("email").toString();
//        JsonNode y = x.get(email);
       System.out.println(" JsonNode = " + y + " or " + x.toString());
       boolean result = false;
       LoginDAO loginDAO = new LoginDAO(y);
       result = loginDAO.findCustomerInLoginTableReturnTorF(y);
//        temp = loginDAO.findCustomerInLoginTable(y);
//        System.out.println("*&*&*&^%%%%% in findCustomerInLoginTable loginDAO  = " + loginDAO.email);
//        System.out.println("*&*&*&^%%%%% in findCustomerInLoginTable temp  = " + temp.toString());
        System.out.println("in findCustomerInLoginTable result  = " + result);

        return (Result) ok(String.valueOf(result));

    }

    public Result assetFirstSignUpForLoginTable(String loginObject){

        System.out.println("login controller login object is = " + loginObject.toString());
        JsonNode jsonNode = Json.parse(loginObject);
        String email = Json.stringify(jsonNode.get("email"));
        String password = Json.stringify(jsonNode.get("password"));

        System.out.println("*** &&& *** inside assetFirstSignUpForLoginTable email = " + email + " pass = " +  password);
        LoginDAO loginDAO = new LoginDAO(email, password);
        //save new object to database
        loginDAO.addLoginObject(loginDAO);
        //return int to add to practice
        //int temp = loginDAO.returnTableRef(loginDAO);
        System.out.println("table ref = " +  "table ref = " + loginDAO.getId());
        System.out.println("*** &&& *** inside assetFirstSignUpForLoginTable loginDAO after new creation = " + loginDAO.toString());
        //loginDAO = new LoginDAO(Json.stringify(jsonNode.get("email")), jsonNode.get("password"));
        return ok(jsonNode);
    }

}
