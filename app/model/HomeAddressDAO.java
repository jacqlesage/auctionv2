package model;

import com.fasterxml.jackson.databind.JsonNode;
import io.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customerHomeAddressTable")
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

                updateCustomerObj.address1 = address1;
                updateCustomerObj.address2 = address2;
                updateCustomerObj.city = city;
                updateCustomerObj.country =country;
                updateCustomerObj.postCode = postCode;
                updateCustomerObj.cusEmailReference = email;
                updateCustomerObj.cusNumberReference = cusNumberInt;

                System.out.println(updateCustomerObj.toString() + "this is the update object for address");
        }
}
