$( document ).ready(function() {
    $( ".item" ).click(function() {
        $('body').css({"position": "fixed", "overflow": "hidden"});

        // Changing clicked index file to visible in drawer
        var index = $( ".item" ).index( this );
        $( "#portContainer" ).children().addClass( "inactiveImage");
        $( ".inactiveImage" ).eq( index ).removeClass( "inactiveImage");
    });

    // Scroll back to index upon pure-drawer close
    $(".pure-toggle-label").click(function (){
        $('body').css({"position": "relative", "overflow": "auto"});
        $('html, body').animate({
            scrollTop: $( "#portfolioSection" ).offset().top
        }, 500);
    });
});