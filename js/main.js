var informationDiv = document.getElementById("information");
var footerDiv = document.getElementById("footer");

function adjustMarginTop(){
    if(window.screen.width < 768){
        var marginTop = informationDiv.clientHeight * 4 / 5;
        footerDiv.style.marginTop = marginTop + "px";
        console.log("a");
    }
    else{
        var marginTop = informationDiv.clientHeight * 2 / 10;
        footerDiv.style.marginTop = marginTop + "px";
    }
}

window.addEventListener("load", adjustMarginTop); 
window.addEventListener("resize", adjustMarginTop);