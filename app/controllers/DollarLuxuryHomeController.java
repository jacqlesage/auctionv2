package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import model.AuctionDAO;
import model.Customer;
import play.data.FormFactory;
import play.libs.Json;
import play.mvc.*;


import javax.inject.Inject;

import java.util.Map;

import static play.mvc.Results.ok;

/**
 * Created by james on 8/09/17.
 */
public class DollarLuxuryHomeController extends Controller{

    @Inject
    FormFactory formFactory;

    public Result loadDollarDashboard(String email) {

        System.out.println(email + " in load dashboard thing");
        //populate dashboard with 1) customer info


        return ok(views.html.dollarLuxuryDashboard.render());
    }

    public Result dollarHomePage() {

        return ok(views.html.dollarLuxuryHome.render());
    }

    public Result dollarDashboard() {

//        Customer cus = formFactory.form(Customer.class).bindFromRequest().get();
//
//        cus = cus.findCustomerByEmail(cus.email);
//
//        String x = cus.email;
//        System.out.println(x + "%%%%####");
//
//        session().put("customerFull", x);

        return ok(views.html.dollarLuxuryDashboard.render());
        //return redirect(routes.DollarLuxuryHomeController.dollarDashboard());
    }

    public Result dollarAdminAuctionPreview() {


        return ok(views.html.dollarLuxuryAdminPreviewAuction.render());
    }

    public Result dollarLuxuryAdminPreviewAuction(){

        //preview auction before submitting it
        System.out.println("testing ()(*&(*&(*&(*&");

        //AuctionDAO auctionDAO = formFactory.form(AuctionDAO.class).bindFromRequest().get();

        AuctionDAO auctionDAO = formFactory.form(AuctionDAO.class).bindFromRequest().get();
        Map<String, String[]> form_values = request().body().asFormUrlEncoded();

        System.out.println("!!!!" + form_values.get("auctionheading")[0]);
        System.out.println("!!!!" + form_values.get("auctionVideo")[0]);


        AuctionDAO auctionDAO1 = new AuctionDAO();

        auctionDAO1 = auctionDAO;

        System.out.println("auctionDAO1 " + auctionDAO1.current_auction_title);

        System.out.println("auctionDAO " + auctionDAO.current_auction_title);


        JsonNode jsonNode = Json.toJson(auctionDAO1);

        session().put("auction",Json.stringify(jsonNode));

        return ok(views.html.dollarLuxuryAdminPreviewAuction.render());
    }


}
