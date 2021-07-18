var toggler = false;

$(".nb-nav-link").click(function(){
    if (!toggler){
        $(this).find('.dropdown').toggle();
    } 
    toggler = false;
});

$(".dropdown-link").click(function(){
    $(this).find('.dropdown').toggle();
    toggler = true;
});