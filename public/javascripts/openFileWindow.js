
function copyFileValueAcrossToDisplay(){
    alert("tests");

    var x = document.getElementById("file").value;
    x.value = fileInput.value.replace("C:\\fakepath\\", "");
    document.getElementById("auctionVideo").value = x;


};