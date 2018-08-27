package model;

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
}
