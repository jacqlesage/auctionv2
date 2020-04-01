package model;

import io.ebean.Model;

import java.text.SimpleDateFormat;

//for assets
public class ModelDAO extends Model {

    int id;
    String name;
    String serialNumber;
    SimpleDateFormat dateOfPurchase;
    int customerPracticeRefNum;
    int rowNumberGuide;
}
