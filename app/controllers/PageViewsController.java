package controllers;

import play.mvc.Controller;
import play.mvc.Result;

public class PageViewsController extends Controller {

   public Result practiceAssetList() {
        return ok(views.html.assetMainPage.render());
    }
}
