$(document).ready(function() {

    AOS.init();
    
$("#about").one("click", function() {
    console.log("boop");
    $(".btn").addClass('hide');
    $("#pabout").addClass('show');
   
})
})