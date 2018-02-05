package model;

import io.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

public class HomeAddressDAO extends Model {

    @Entity
    @Table(name = "customerHomeAddressTable")
    public class PostalAddressDAO extends Model{

        public String address1;
        public String address2;
        public String city;
        public String country;
        public String postCode;
        public String cusEmailReference;
        public int cusNumberReference;

        @Id
        public int id;

    }