// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();



$(window).on("scroll", function() {
    if ($(this).scrollTop() > 320) {
        $("#topnav").removeClass('invisible').addClass('animated fadeInDown');

    }
    else {
        $("#topnav").addClass('invisible').removeClass('animated fadeInDown');
    }
 });
