
$(function() {
    $("#addFileBtn1").click(function () {
        alert("test23#");
        var r =  jsRoutes.controllers.HomeController.uploadFile();
        $.ajax({
            url: r.url, type: r.type, dataType: "JSON",
            success: (function (data) {

                console.log(data);
                document.getElementById("auctionVideo").value = data.toString();


            }),

            error: (function (data) {


                alert("no file selected");
            })
        })
    })
});

$(function() {
    $("#addFileBtn2").click(function () {
        alert("test24#");
        var r =  jsRoutes.controllers.HomeController.uploadFile();
        $.ajax({
            url: r.url, type: r.type, dataType: "JSON",
            success: (function (data) {

                console.log(data);
                document.getElementById("auctionMainPicture").value = data.toString();


            }),

            error: (function (data) {


                alert("no file selected");
            })
        })
    })
});
