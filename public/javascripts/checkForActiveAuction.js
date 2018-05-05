alert("testingFindAuction");

$(function() {

        alert("test25#");
    alert("fishsihs");
        var r =  jsRoutes.controllers.JsController.findActiveAuction();
        alert("fishsihsxxx");
        $.ajax({
            url: r.url, type: r.type, dataType: "JSON",
            success: (function (data) {

                console.log(data + " success from getActive");
                //document.getElementById("auctionMainPicture").value = data.toString();


            }),

            error: (function (data) {

                console.log(data.toString() + " NON success from getActive");
                alert("no success from getActvie");
            })
        });

});
// $.ready(function() {
//     alert("testingFindAuction%%%");
// $.ajax(jsRoutes.controllers.JsController.findActiveAuction())
//     .done( alert("TestSuccess") )
//     .fail( alert("TestFail"));
// });