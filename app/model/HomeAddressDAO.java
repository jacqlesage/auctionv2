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


        public HomeAddressDAO(String address1, String address2, String city, String country, String postCode, String cusEmailReference, int cusNumberReference, int id) {
                this.address1 = address1;
                this.address2 = address2;
                this.city = city;
                this.country = country;
                this.postCode = postCode;
                this.cusEmailReference = cusEmailReference;
                this.cusNumberReference = cusNumberReference;
                this.id = id;
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

        public void changeCustomerAddressDetails(JsonNode cusAddressObject){

                HomeAddressDAO updateCustomer;

                String address1 = cusAddressObject.get("updatedAddress1").toString();
                String address1Stripped =  address1.replaceAll("\"","");
                address1 = address1Stripped;

                String address2 = cusAddressObject.get("updatedAddress2").toString();
                String address2Stripped =  address1.replaceAll("\"","");
                address2 = address2Stripped;

                String city = cusAddressObject.get("updatedCity").toString();
                String cityStripped =  address1.replaceAll("\"","");
                city = cityStripped;
                
                String country = cusAddressObject.get("updatedCountry").toString();
                String countryStripped =  address1.replaceAll("\"","");
                country = countryStripped;

                String postCode = cusAddressObject.get("updatedPostCode").toString();
                String postCodeStripped =  address1.replaceAll("\"","");
                postCode = postCodeStripped;

                String email = cusAddressObject.get("email").toString();
                String emailStripped =  email.replaceAll("\"","");
                email = emailStripped;

                String cusNumber = cusAddressObject.get("cusNumber").toString();
                String cusNumberStripped =  email.replaceAll("\"","");
                cusNumber = cusNumberStripped;
        }
}
