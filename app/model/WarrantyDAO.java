package model;

import io.ebean.Model;

public class WarrantyDAO extends Model {
    int id;
    //fk Manufacturer
    //fk Model
    //fk SerialNumber
    int warrantyPeriod;
    boolean warrantyExtension;
    String proofOfpurchaseImg;
    String proofOfWarrantyExtensionImg;
    //int rowNumberGuide;
}
