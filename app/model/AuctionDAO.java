package model;

import io.ebean.Finder;
import io.ebean.Model;
import io.ebean.annotation.JsonIgnore;
import play.libs.Json;
import play.mvc.Result;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import static play.mvc.Results.ok;

/**
 * Created by james on 14/09/17.
 */
@Entity
@Table(name = "auction")
public class AuctionDAO extends Model {

    @Id
    public int id;

    public String current_auction_title;


    public String current_auction_sales_video;


    public String urlfor_current_auction_specs;


    public String current_auction_item_location;


    public int current_auction_reserve_price; //never shown I think admin should be able to setup the auction with higher management to add reserve


    public int current_auction_total_bids;


    public int active;

    @JsonIgnore
    @Transient
    public static Finder<Integer, AuctionDAO> find = new Finder<Integer,AuctionDAO>(AuctionDAO.class);


    public AuctionDAO(String current_auction_title, String current_auction_sales_video, String urlfor_current_auction_specs, String current_auction_item_location, int current_auction_reserve_price, int current_auction_total_bids, int active) {
        this.current_auction_title = current_auction_title;
        this.current_auction_sales_video = current_auction_sales_video;
        this.urlfor_current_auction_specs = urlfor_current_auction_specs;
        this.current_auction_item_location = current_auction_item_location;
        this.current_auction_reserve_price = current_auction_reserve_price;
        this.current_auction_total_bids = current_auction_total_bids;
        this.active = active;
    }

    public AuctionDAO() {
    }

    public int getId() {
        return id;
    }


    public String getCurrent_auction_title() {
        return current_auction_title;
    }

    public void setCurrent_auction_title(String current_auction_title) {
        this.current_auction_title = current_auction_title;
    }

    public String getCurrent_auction_sales_video() {
        return current_auction_sales_video;
    }

    public void setCurrent_auction_sales_video(String current_auction_sales_video) {
        this.current_auction_sales_video = current_auction_sales_video;
    }

    public String getUrlfor_current_auction_specs() {
        return urlfor_current_auction_specs;
    }

    public void setUrlfor_current_auction_specs(String urlfor_current_auction_specs) {
        this.urlfor_current_auction_specs = urlfor_current_auction_specs;
    }

    public String getCurrent_auction_item_location() {
        return current_auction_item_location;
    }

    public void setCurrent_auction_item_location(String current_auction_item_location) {
        this.current_auction_item_location = current_auction_item_location;
    }

    public int getCurrent_auction_reserve_price() {
        return current_auction_reserve_price;
    }

    public void setCurrent_auction_reserve_price(int current_auction_reserve_price) {
        this.current_auction_reserve_price = current_auction_reserve_price;
    }

    public int getCurrent_auction_total_bids() {
        return current_auction_total_bids;
    }

    public void setCurrent_auction_total_bids(int current_auction_total_bids) {
        this.current_auction_total_bids = current_auction_total_bids;
    }

    public Result getActiveAuction() {

        AuctionDAO auctionDAO = AuctionDAO.find.query().fetch("active",Integer.toString(1)).findUnique();

            return ok(Json.toJson(auctionDAO));
        }

        //return ok(Json.toJson("No auction found"));





    public void setActive(int active) {
        this.active = active;
    }

    @Override
    public String toString() {
        return "AuctionDAO{" +
                "id=" + id +
                ", current_auction_title='" + current_auction_title + '\'' +
                ", current_auction_sales_video='" + current_auction_sales_video + '\'' +
                ", urlfor_current_auction_specs='" + urlfor_current_auction_specs + '\'' +
                ", current_auction_item_location='" + current_auction_item_location + '\'' +
                ", current_auction_reserve_price=" + current_auction_reserve_price +
                ", current_auction_total_bids=" + current_auction_total_bids +
                ", active=" + active +
                '}';
    }
}
