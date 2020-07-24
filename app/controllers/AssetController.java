package controllers;

import play.data.FormFactory;
import play.libs.Json;
import play.mvc.*;
import javax.inject.Inject;

public class AssetController extends Controller {

    @Inject
    FormFactory formFactory;

    public Result addAsset(){
        //TO DO
        return ok();
    }

}
