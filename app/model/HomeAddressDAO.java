package model;

import com.fasterxml.jackson.databind.JsonNode;
import io.ebean.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "customerhomeaddresstable")
public class HomeAddressDAO extends Model {

        public String address1;
        public String address2;
        public String city;
        public String country;
        public String postCode;
        public String cusEmailReference;
        public int cusNumberReference;

        @Id
        public int id;

        @Transient
        public static Finder<Integer, HomeAddressDAO> find = new Finder<Integer, HomeAddressDAO>(HomeAddressDAO.class);


        public HomeAddressDAO(String address1, String address2, String city, String country, String postCode, String cusEmailReference, int cusNumberReference) {
                this.address1 = address1;
                this.address2 = address2;
                this.city = city;
                this.country = country;
                this.postCode = postCode;
                this.cusEmailReference = cusEmailReference;
                this.cusNumberReference = cusNumberReference;

        }

        public HomeAddressDAO(){

        }

        public String getAddress1() {
                return address1;
        }

        public void setAddress1(String address1) {
                this.address1 = address1;
        }

        public String getAddress2() {
                return address2;
        }

        public void setAddress2(String address2) {
                this.address2 = address2;
        }

        public String getCity() {
                return city;
        }

        public void setCity(String city) {
                this.city = city;
        }

        public String getCountry() {
                return country;
        }

        public void setCountry(String country) {
                this.country = country;
        }

        public String getPostCode() {
                return postCode;
        }

        public void setPostCode(String postCode) {
                this.postCode = postCode;
        }

        public String getCusEmailReference() {
                return cusEmailReference;
        }

        public void setCusEmailReference(String cusEmailReference) {
                this.cusEmailReference = cusEmailReference;
        }

        public int getCusNumberReference() {
                return cusNumberReference;
        }

        public void setCusNumberReference(int cusNumberReference) {
                this.cusNumberReference = cusNumberReference;
        }

        public int getId() {
                return id;
        }

        public void setId(int id) {
                this.id = id;
        }

        @Override
        public String toString() {
                return "HomeAddressDAO{" +
                        "address1='" + address1 + '\'' +
                        ", address2='" + address2 + '\'' +
                        ", city='" + city + '\'' +
                        ", country='" + country + '\'' +
                        ", postCode='" + postCode + '\'' +
                        ", cusEmailReference='" + cusEmailReference + '\'' +
                        ", cusNumberReference=" + cusNumberReference +
                        ", id=" + id +
                        '}';
        }

        public void changeCustomerAddressDetails(JsonNode cusAddressObject){

                boolean trueOrFalse;

                String address1 = cusAddressObject.get("updatedAddress1").toString();
                String address1Stripped =  address1.replaceAll("\"","");
                address1 = address1Stripped;

                String address2 = cusAddressObject.get("updatedAddress2").toString();
                String address2Stripped =  address2.replaceAll("\"","");
                address2 = address2Stripped;

                String city = cusAddressObject.get("updatedCity").toString();
                String cityStripped =  city.replaceAll("\"","");
                city = cityStripped;

                String country = cusAddressObject.get("updatedCountry").toString();
                String countryStripped =  country.replaceAll("\"","");
                country = countryStripped;

                String postCode = cusAddressObject.get("updatedPostCode").toString();
                String postCodeStripped =  postCode.replaceAll("\"","");
                postCode = postCodeStripped;

                String email = cusAddressObject.get("email").toString();
                String emailStripped =  email.replaceAll("\"","");
                email = emailStripped;

                String cusNumber = cusAddressObject.get("cusNumber").toString();
                String cusNumberStripped =  cusNumber.replaceAll("\"","");
                int cusNumberInt = Integer.parseInt(cusNumberStripped);

                HomeAddressDAO updateCustomerObj = new HomeAddressDAO(address1,address2,city,country,postCode,email,cusNumberInt);

                System.out.println(updateCustomerObj.toString() + "this is the update object for address");

                trueOrFalse = checkIfCusotmerIsInHomeAddressTableAlready(email);
                System.out.println(trueOrFalse + "****true or false here   ********");

                if(trueOrFalse == true) {
                        //if customer exsists update otherwise insert SQL
                        System.out.println(trueOrFalse + "****inside true of t or f    ********");
                       //SqlUpdate updateKeyQuery = Ebean.createSqlUpdate("UPDATE customerhomeaddresstable SET address1 =:address1, address2 =:address2, city = :city,"
                           //    + "country = :country, post_code =:1111 WHERE id = :cusNumberInt");
                        SqlUpdate updateKeyQuery = Ebean.createSqlUpdate("UPDATE customerhomeaddresstable SET address1 =:address1, address2 =:address2, city =:city, country =:country, post_code =:post_code," +
                             "cus_email_reference =:cus_email_reference, cus_number_reference =:cus_number_reference WHERE id = :id");
                        updateKeyQuery.setParameter("address1", address1);
                        updateKeyQuery.setParameter("address2", address2);
                        updateKeyQuery.setParameter("city", city);
                        updateKeyQuery.setParameter("country", country);
                        updateKeyQuery.setParameter("post_code", postCode);
                        updateKeyQuery.setParameter("cus_email_reference", email);
                        updateKeyQuery.setParameter("cus_number_reference", cusNumberInt);
                        updateKeyQuery.setParameter("id", cusNumberInt);
                        updateKeyQuery.execute();

                        //for this type of entry there is no "where" that can be used as I am populating the table for the first time.
                        //The plan would be to check for the table with the ref - if none make a table. Need to look into this.
                }else{
                        System.out.println("inside the false of ****true or false here   ********");

                        updateCustomerObj.save();


                }
        }

        public boolean checkIfCusotmerIsInHomeAddressTableAlready(String email){

                HomeAddressDAO hmAddDAO = new HomeAddressDAO();

                System.out.println("email inside HomeAddressDAO finder  " + email);

                if (HomeAddressDAO.find.query().where().eq("cus_email_reference", email).findUnique() == null) {
                        //then customer is not in DB
                        return false; //means insert
                }else {

                        hmAddDAO = HomeAddressDAO.find.query().where().eq("cus_email_reference", email).findUnique();
                        System.out.println(hmAddDAO.toString() + "ookokokokok");
                        return true; //means update
                }


        }

        public HomeAddressDAO returnCusotmerHomeAddressTable(String email){  //up to here 16.06.2019

                HomeAddressDAO hmAddDAO = new HomeAddressDAO();

                System.out.println("email inside HomeAddressTable finder  " + email);

                if (HomeAddressDAO.find.query().where().eq("cus_email_reference", email).findUnique() == null) {
                        //then customer is not in DB
                        System.out.println(hmAddDAO.toString() + "LLLLLLLLLL");
                        return null;
                }else {

                        hmAddDAO = HomeAddressDAO.find.query().where().eq("cus_email_reference", email).findUnique();
                        System.out.println(hmAddDAO.toString() + "returned cusHomeAddressTable");
                        return hmAddDAO; //means update
                }


        }
}
