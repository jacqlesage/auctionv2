package controllers;

import akka.stream.impl.JsonObjectParser;
import com.fasterxml.jackson.databind.JsonNode;
import model.LoginDAO;
import model.PracticeDAO;
import play.api.libs.json.jackson.JacksonJson;
import play.data.DynamicForm;
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

        loginDAO = new LoginDAO(loginDAO.email, loginDAO.password, loginDAO.id);

        jsonNode = Json.toJson(loginDAO);
        //return int to add to practice
        //int temp = loginDAO.returnTableRef(loginDAO);
        //System.out.println("table ref = " +  "table ref = " + loginDAO.getId());
        System.out.println("*** &&& *** inside assetFirstSignUpForLoginTable loginDAO after new creation = " + loginDAO.toString());

        System.out.println("jsonNode = " + jsonNode.toString());
        return ok(jsonNode);
    }

    public Result loginCustomerFirstTime(String customerObject){
        JsonNode jsonNode = Json.parse(customerObject);
        //save customer object and return customer ID for reference in practice table
        //String fname = String.valueOf(jsonNode.firstName);
        //System.out.println("inside Result loginCustomerFirstTime "+  jsonNode.get("firstName"));
        //get each value out of the jsonNode to make customer object.

        String firstName = String.valueOf(jsonNode.get("firstName"));
        String lastName = String.valueOf(jsonNode.get("lastName"));
        String email = String.valueOf(jsonNode.get("email"));
        String password = String.valueOf(jsonNode.get("password"));
        String temp = String.valueOf(jsonNode.get("loginTableRefNum"));
        temp = temp.substring(1, temp.length()-1);
        int loginTableRef = Integer.valueOf(temp);
        System.out.println("$$$$$$$$ and return object with ref ID" + loginTableRef);
        Customer customer = new Customer(firstName, lastName, email, password, loginTableRef);
        //save customer
        customer.save();
        //and return object with ref ID for practice object
        //jsonNode = Json.stringify(customer);

        //System.out.println("$$$$$$$$ and return object with ref ID v 2 " + customer.getId());


        return ok(Json.toJson(customer));
    }

    public Result addPracticeObject(String practiceObject){

        JsonNode jsonNode = Json.parse(practiceObject);
        //save customer object and return customer ID for reference in practice table
        //String fname = String.valueOf(jsonNode.firstName);
        System.out.println("inside Result addPracticeObject "+  jsonNode.get("customerRefNum"));
        //get each value out of the jsonNode to make customer object.

        String practiceTAName = String.valueOf(jsonNode.get("practiceTAName"));
        String practiceLegalName = String.valueOf(jsonNode.get("practiceLegalName"));
        String practicePhoneNumber = String.valueOf(jsonNode.get("practicePhoneNumber"));
        String practiceURL = String.valueOf(jsonNode.get("practiceURL"));
        String temp = String.valueOf(jsonNode.get("customerRefNum"));
        //temp = temp.substring(1, temp.length()-1);
        System.out.println("$$$$$$$$ temp === " + temp);
        int customerRefNum = Integer.valueOf(temp);
        System.out.println("$$$$$$$$ customerRefNum === " + customerRefNum);
        PracticeDAO practiceDAO = new PracticeDAO(practiceTAName, practiceLegalName, practicePhoneNumber, practiceURL, customerRefNum);
        System.out.println("$$$$$$$$ addPracticeObject" + practiceDAO.toString());

        //save customer
        practiceDAO.save();
        //add Practice name to session
        session().put("practiceTAName", practiceTAName);
        //refresh page or load new "logged in page?"
        //loadAssetMainHTMLPage();
        return ok(Json.toJson(practiceDAO));
    }

    public Result loadAssetMainHTMLPage(){
        System.out.println("inside method loadAssetMainHTMLPage lloging contoroller");
        return ok(views.html.assetMainPage.render());

    }

    public Result firstSignUp(){
        //LoginDAO loginDAOForm = formFactory.form(LoginDAO.class).bindFromRequest().get();

        //Customer customer = formFactory.form(Customer.class).bindFromRequest().get();
        DynamicForm requestData = formFactory.form().bindFromRequest();

        //loginDAo object
        String email = requestData.get("email");
        String password = requestData.get("password");
        LoginDAO loginDAO = new LoginDAO(email, password);

        //customerDAO object
        String firstName = requestData.get("firstName");
        String lastName = requestData.get("lastName");
        Customer customer = new Customer(firstName, lastName, email, password);

        //practice object
        String practiceTAName = requestData.get("practiceTAName");
        String practiceLegalName = requestData.get("practiceLegalName");
        String practicePhoneNumber = requestData.get("practicePhoneNumber");
        String practiceURL = requestData.get("practiceURL");
        PracticeDAO practiceDAO = new PracticeDAO(practiceTAName,practiceLegalName,practicePhoneNumber,practiceURL);


        //PracticeDAO practiceDAOForm = formFactory.form(PracticeDAO.class).bindFromRequest().get();
        //bind all forms at once?

        //Customer customer1 = formFactory.form(Customer.class).bindFromRequest().get();
        //customer1 = customer.get();





        //Map<String, String[]> form_values = request().body().asFormUrlEncoded();
        //System.out.println("!!!!cus" + form_values.toString());
//        System.out.println("!!!!cus1" + customer.toString());
//        System.out.println("!!!!loginDAOForm" + loginDAOForm.toString());
        System.out.println("!!!!practiceDAOForm" + practiceTAName + " " + practiceLegalName +" " + practiceURL +
                practicePhoneNumber +   " " +   email
        + " " + password + " " + firstName + " " + lastName + " ");
       //System.out.println("!!!!" + form_values.get("firstName")[0]);
        //System.out.println("!!!!" + form_values.get("lastName")[0]);


//        Form<Customer> userFormCus = formFactory.form(Customer.class);
//        Form<PracticeDAO> userFormPractice = formFactory.form(PracticeDAO.class);
//        Form<LoginDAO> userFormLogin = formFactory.form(LoginDAO.class);
//
//        userFormCus.bindFromRequest().get();
//
//        System.out.println(userFormCus.toString());

        return ok();
    }

    public Result addLoginTableObject(String loginObject)
    {
        System.out.println("loging table object = "+ loginObject);
        JsonNode jsonNode = Json.parse(loginObject);
        String email = Json.stringify(jsonNode.get("email"));
        String password = Json.stringify(jsonNode.get("password"));

        LoginDAO loginDAO = new LoginDAO(email, password);
        //save loging object

        //return ID.

        return ok(Json.toJson("string"));
    }

}
