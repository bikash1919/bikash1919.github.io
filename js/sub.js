function openNav() {
    $("#mySidenav").css("width", "350px");
    //$("#main").css("marginLeft", "350px");
    $('.topic-title').fadeIn();
    $('.topics').fadeIn();
}

function closeNav() {
    $("#mySidenav").css("width", "45px");
    $("#main").css("marginLeft", "45px");
    $('.topic-title').fadeOut();
    $('.topics').fadeOut();
}

closeNav();
$(".side-btn").click(function (e) { 
    e.preventDefault();
    console.log("clicked");
    if ($(this).attr("status")=="hide") {
        $(this).hide().html("&times;").fadeIn();
        $(this).attr("status", "show");
        openNav();
    } else {
        $(this).hide().html("&#9776;").fadeIn();
        $(this).attr("status", "hide");
        closeNav();
    }
});