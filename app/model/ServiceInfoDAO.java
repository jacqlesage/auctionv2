package model;

import io.ebean.Model;

import java.text.SimpleDateFormat;

public class ServiceInfoDAO extends Model {

    boolean calibrationDone;
    int calibrationInterval;
    //fk serialNumber
    //fk manufaturer
    //fk model
    String qATest;
    String qAInterval;
    SimpleDateFormat unitLastService;
    int serviceInterval;
    String attachments;

}
