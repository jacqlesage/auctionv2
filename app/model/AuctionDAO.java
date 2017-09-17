package model;

import io.ebean.Model;

import javax.persistence.Id;

/**
 * Created by james on 14/09/17.
 */
public class AuctionDAO extends Model {

    @Id
    public int id;

    public String current_auction_title;


    public String current_auction_sales_video;


    public String urlfor_current_auction_specs;


    public String urlfor_current_auction_image;


    public String current_auction_item_location;


    public int current_auction_reserve_price; //never shown I think admin should be able to setup the auction with higher management to add reserve


    public int current_auction_total_bids;


    public int active;

}
