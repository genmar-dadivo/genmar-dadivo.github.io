$(document).ready(function() {
    $("<img/>")
    .on('load', function() { $('.loading-screen').fadeOut(); })
    .on('error', function() { console.log("error loading image"); })
    .attr("src", $(originalImage).attr("src"))
;
    
    // var container = document.getElementById("container");
    
    // onImagesLoaded(container, function() {
    //     //alert("All the images have loaded");
    //     $('.loading-screen').fadeOut();
    // });

    $(document).on("click", '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    var ll = new LazyLoad();
    $(".vg").click(function() {
        $(".invitation-card").addClass('hidden');
        $(".gallery").removeClass('hidden');
    });
});
