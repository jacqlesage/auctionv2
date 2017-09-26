package controllers;

import play.libs.Json;
import play.mvc.*;
import views.html.*;

import java.util.Map;

/**
 * Created by james on 25/09/17.
 */
public class FacebookLoginController extends Controller {

public Result collectFacebookData(){

    return ok("testing");
//    Map<String,String[]> form =  request().body().asFormUrlEncoded();
//    return ok(Json.toJson(form)).as("application/json");
//
    }

}
