package model;

import com.fasterxml.jackson.databind.JsonNode;
import io.ebean.Model;
import io.ebean.Finder;
import io.ebean.*;
import io.ebean.annotation.JsonIgnore;
import play.data.validation.Constraints;
import play.libs.Json;
import play.mvc.Result;

import javax.persistence.*;

import static play.mvc.Results.TODO;
import static play.mvc.Results.ok;

//import play.libs.Crypto; // crypt AES

/**
 * Created by james on 2/03/17.
 */

@Entity
@Table(name = "customer")
//@SecondaryTable(name="customer_login")
public class Customer extends Model {

    @Id
    public int id;

    // @Constraints.Required(message="validation.required")
//    @Constraints.Email(message="validation.fname")
    @Constraints.MaxLength(value = 100, message = "validation.maxLength")
//    @Column(unique=true, nullable=false, length=100)
    public String firstName;

    // @Constraints.Required(message="validation.required")
//    @Constraints.Email(message="validation.lname")
    @Constraints.MaxLength(value = 100, message = "validation.maxLength")
//    @Column(unique=true, nullable=false, length=100)
    public String lastName;
    //
//    @Constraints.MaxLength(value=20,message="validation.maxLength")
//    @Constraints.Required(message="validation.required")
    public String phoneNumber;

    //    @Column(unique=true, nullable=false, length=100)
    //@Constraints.Required(message="validation.required")
    //@Constraints.Email(message="validation.email")
    @Constraints.MaxLength(value = 100, message = "validation.maxLength")
    public String email;


    //@JoinColumn(table="cusotmer_login")
    //@Constraints.Required(message="validation.required")
    //@Transient //Defines this field as being transient (not persisted)
    //@JsonIgnore
    public String password;

    //this should be auto to 1 once email validation is done.- needs some work on this.
//    @Constraints.Min(1)
//    @Constraints.MaxLength(1)
    //@Constraints.Required(message="validation.required")
    public int active;

    //    address details - Better to use an address finder as opposed to regex as the pattern would be consistant
    //eg Address validation using Google Maps API or nz post code finder
    //@Constraints.Required(message="validation.required")
//    public String address1;
//
//    public String address2;
//
//    //    @Min(3)
//    // @Constraints.Required(message="validation.required")
//    public String suburb;
//
//    //    @Min(3)
//    //@Constraints.Required(message="validation.required")
//    public String city;
//
//    //    @Min(4)
//////  @Max(6) this will also be directed by the address checker.
//    //@Constraints.Required(message="validation.required")
//    public int postcode;
//
//    //can also use a country selector here to clean up entires into the DB.
//    //@Constraints.Required(message="validation.required")
//    public String country;



//    @OneToOne(mappedBy = "customer")
//    @Transient
//    @JsonIgnore
//     public CustomerLogin customerLogin;

    //@JsonIgnore
    @Transient
    public static Finder<Integer, Customer> find = new Finder<Integer, Customer>(Customer.class);

    public Customer(@Constraints.MaxLength(value = 100, message = "validation.maxLength") String email, String password) {
        this.email = email;
        this.password = password;
    }

    public Customer(String firstName, String lastName, String email) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;

    }

    public Customer(String firstName, String lastName, String email, String password) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;

    }

    public Customer(String phoneNumber, String email, String password, Boolean dummy){

        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
        dummy = true;
    }

    public Customer() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getActive() {
        return active;
    }

    public void setActive(int active) {
        this.active = active;
    }

    //I have had to comment this method out as some how it is placing this method into my JS results. Werid stuff.
    //At this stage I do not need an all customers function.
//    public String getAllCustomers() {
//
//        //JsonNode jsonNode =null;
//        String jsonString = Ebean.json().toJson(find.all());
//        //jsonNode = Json.toJson(jsonString);
//
//        //return Ebean.json().toJson(find);
//        return jsonString;
//
//    }

    /**
     * Method to find a specific customer via way of email.
     *
     * @param email email of the customer trying to use sign up
     * @return boolean - false if the DB found no matching email address else ture (one found)
     */
    public Result findCustomer(String email) {

        if (Customer.find.query().where().eq("email", email).findUnique() == null) {
            //then customer is not in DB

            return ok(Json.toJson(email));
        }

        return ok(Json.toJson("No email found"));
    }

    public static Customer findCustomerByEmail(String email) {


        if (Customer.find.query().where().eq("email", email).findUnique() == null) {
            //then customer is not in DB

            return null;
        }



        Customer customer = Customer.find.query().where().eq("email", email).findUnique();
        System.out.println(customer.toString()+ "ookokokokok");



        return customer;
    }





   public void addCustomer(Customer customer){



   }

    public Result loginCustomer(Object customer){

       System.out.print(customer.toString());

        return ok();
    }


   public void checkPassword(Json customer){



   }

   public void changeCustomerDetails(JsonNode cusDetails){
        Customer updateCustomer;

        //get values out of cusDetails
       //note - need to strip quotes out of string - causes issues in DB. See table
       //need to also get the ID of the customer.
        String phone = cusDetails.get("updatedPhoneNumber").toString();
        String phoneStripped =  phone.replaceAll("\"","");
        phone = phoneStripped;


        String email = cusDetails.get("updatedEmail").toString();
        String emailStripped =  email.replaceAll("\"","");
        email = emailStripped;

        String pwd = cusDetails.get("updatedPwd").toString();
        String pwdStripped =  pwd.replaceAll("\"","");
        pwd = pwdStripped;

        //create customer : Dummy is so I can have the constructor needed
        Customer customer = new Customer(phone,email,pwd,  true);
        //get customer id
       Customer temp = new Customer("temp","temp");
       System.out.println("printng out email address " + email);
       System.out.println("printng out email address stripped " + emailStripped);

       temp = Customer.findCustomerByEmail(email);
       System.out.println("printing out customer temp " + temp.toString());


       int customerID = temp.getId();

        System.out.println("Json cus details" + temp.toString() + "customer ID = " + customerID);

        //make calls to the DB so I can update details.
       SqlUpdate updateKeyQuery = Ebean.createSqlUpdate("UPDATE customer SET email = :email, phone_number = :phone_number, password = :password WHERE id = :id");
       updateKeyQuery.setParameter("phone_number", phone);
       updateKeyQuery.setParameter("email", email);
       updateKeyQuery.setParameter("password", pwd);
       updateKeyQuery.setParameter("id", customerID);
       updateKeyQuery.execute();



            return;
       //Customer cus = Customer.findCustomerByEmail(cusEmail);

       //insert the new value

   }



    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
//                ", address1='" + address1 + '\'' +
//                ", address2='" + address2 + '\'' +
//                ", suburb='" + suburb + '\'' +
//                ", city='" + city + '\'' +
//                ", postcode=" + postcode +
//                ", country='" + country + '\'' +
                ", password='" + password + '\'' +
                ", active=" + active +
                '}';
    }
}
