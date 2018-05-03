package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import play.mvc.Controller;
import model.AuctionDAO;
import play.mvc.Result;

public class JavaScriptsController extends Controller{

    public Result findActiveAuction(){
        AuctionDAO aDAO = null;
        JsonNode auctionDAO = null;
        Result result;

        auctionDAO = aDAO.getActiveAuction();

        if (auctionDAO == null) {
            result = notFound(String.format("There is no active auction"));
            return result;
        } else {

            return ok(auctionDAO);
        }


    }
}
