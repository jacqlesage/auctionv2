package controllers;



import play.routing.JavaScriptReverseRouter;
import play.mvc.*;

/**
 * Created by james on 30/12/17.
 */
public class JsController extends Controller{

    public Result javascriptRoutes() {

        return ok(JavaScriptReverseRouter.create("jsRoutes", routes.javascript.JsController.getAllUsers()));
    }

    public Result getAllUsers(){

        return ok();
    }

}
