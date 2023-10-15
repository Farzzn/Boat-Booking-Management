//$(document).keydown(function (event) {
//    if (event.keyCode == 123) { // Prevent F12
//        return false;
//    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
//        return false;
//    }
//});
//
//$(document).on("contextmenu", function (e) {
//    e.preventDefault();
//});
jQuery.fn.disableTextSelect = function() {
    return this.each(function() {
        $(this).css({
            'MozUserSelect': 'none',
            'webkitUserSelect': 'none'
        }).attr('unselectable', 'on').bind('selectstart', function() {
            return false;
        });
    });
};

jQuery.fn.enableTextSelect = function() {
    return this.each(function() {
        $(this).css({
            'MozUserSelect': '',
            'webkitUserSelect': ''
        }).attr('unselectable', 'off').unbind('selectstart');
    });
};

//$('body').disableTextSelect();
$(document).ready(function() {
    var id = '#dialog';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({
        'width': maskWidth,
        'height': maskHeight
    });
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);
    //var winH = $(window).height();
    //var winW = $(window).width();
    //$(id).css('top', winH / 2 - $(id).height() / 2);
    //$(id).css('left', winW / 2 - $(id).width() / 2);
    $(id).fadeIn(2000);
    $('.window .close').click(function(e) {
        e.preventDefault();
        $('#mask').hide();
        $('.window').hide();
    });
    $('#mask').click(function() {
        $(this).hide();
        $('.window').hide();
    });
    $('#dialog').click(function() {
        $("#mask").hide();
        $('.window').hide();
    });
    $('#boxes').click(function() {
        $("#mask").hide();
        $('.window').hide();
    });

});