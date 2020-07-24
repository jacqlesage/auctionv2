package model;
//for assets
import com.fasterxml.jackson.databind.JsonNode;
import io.ebean.Finder;
import io.ebean.Model;
import play.libs.Json;
import play.mvc.Result;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import static play.mvc.Results.ok;

@Entity
@Table(name = "login")
public class LoginDAO extends Model {

    public String email;
    public String password;
    @Id
    public int id;

    @Transient
    public static Finder<Integer, LoginDAO> find = new Finder<Integer, LoginDAO>(LoginDAO.class);

    public LoginDAO(String email) {
        this.email = email;
    }

    public LoginDAO(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public LoginDAO(String email, String password, int id) {
        this.email = email;
        this.password = password;
        this.id = id;
    }

    public Result findCustomerInLoginTable(String email) {

        if (LoginDAO.find.query().where().eq("email", email).findUnique() == null) {
            //then customer is not in DB
          return ok(Json.toJson(null));
        }

        return ok(Json.toJson(email));
    }

    public boolean findCustomerInLoginTableReturnTorF(String email) {

        System.out.println("  inside findCustomerInLoginTableReturnTorF");
        System.out.println("  inside findCustomerInLoginTableReturnTorF email = " + email);

        if (LoginDAO.find.query().where().eq("email", email).findUnique() == null) {
            System.out.println("  inside findCustomerInLoginTableReturnTorF returning false");
            //then customer is not in DB
            return false;
        }
        System.out.println("  inside findCustomerInLoginTableReturnTorF returning true");

           return true;
    }

    //for asset idea not DL.
    public void addLoginObject (LoginDAO loginDAO){

        loginDAO.save();
        System.out.print("Login object saved");

    }
    //for asset idea
    public int returnTableRef(String email){
        LoginDAO loginDAO = null;
        loginDAO = loginDAO.find.query().where().eq("email", email).findUnique();
        System.out.println("loginDAO in returnTableRef = "+ loginDAO.toString());

        return loginDAO.id;

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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "LoginDAO{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", id=" + id +
                '}';
    }


}
