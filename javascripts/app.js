$(document).ready(function() {
    $(".menu-categoria").hover(function() {
        $(this).find(".menu").removeClass("hidden");
    }, function() {
        $(this).find(".menu").addClass("hidden");
    })
    
    $(".producto").hover(function() {
        $(this).find(".img-producto").addClass("hidden");
        $(this).find(".producto-slider-hover").removeClass("hidden");
    }, function() {
        $(this).find(".producto-slider-hover").addClass("hidden");
        $(this).find(".img-producto").removeClass("hidden");
    })
})