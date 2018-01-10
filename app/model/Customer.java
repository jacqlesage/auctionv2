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

import static play.mvc.Results.ok;

//import play.libs.Crypto; // crypt AES

/**
 * Created by james on 2/03/17.
 */

@Entity
@Table(name = "customer")
@SecondaryTable(name="customer_login")
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

    //    address details - Better to use an address finder as opposed to regex as the pattern would be consistant
    //eg Address validation using Google Maps API or nz post code finder
    //@Constraints.Required(message="validation.required")
    public String address1;

    public String address2;

    //    @Min(3)
    // @Constraints.Required(message="validation.required")
    public String suburb;

    //    @Min(3)
    //@Constraints.Required(message="validation.required")
    public String city;

    //    @Min(4)
////  @Max(6) this will also be directed by the address checker.
    //@Constraints.Required(message="validation.required")
    public int postcode;

    //can also use a country selector here to clean up entires into the DB.
    //@Constraints.Required(message="validation.required")
    public String country;

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

//    @OneToOne(mappedBy = "customer")
//    @Transient
//    @JsonIgnore
//     public CustomerLogin customerLogin;

    //@JsonIgnore
    @Transient
    public static Finder<Integer, Customer> find = new Finder<Integer, Customer>(Customer.class);


    public Customer(int id, String firstName, String lastName, String phoneNumber, String email, String address1, String address2, String suburb, String city, int postcode, String country, int active) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address1 = address1;
        this.address2 = address2;
        this.suburb = suburb;
        this.city = city;
        this.postcode = postcode;
        this.country = country;
        this.active = active;
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

    public Customer() {

    }

    public String getAllCustomers() {

        //JsonNode jsonNode =null;
        String jsonString = Ebean.json().toJson(find.all());
        //jsonNode = Json.toJson(jsonString);

        //return Ebean.json().toJson(find);
        return jsonString;

    }

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



        Customer customer = Customer.find.query().where().eq("email", email).findOne();
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

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", address1='" + address1 + '\'' +
                ", address2='" + address2 + '\'' +
                ", suburb='" + suburb + '\'' +
                ", city='" + city + '\'' +
                ", postcode=" + postcode +
                ", country='" + country + '\'' +
                ", password='" + password + '\'' +
                ", active=" + active +
                '}';
    }
}
