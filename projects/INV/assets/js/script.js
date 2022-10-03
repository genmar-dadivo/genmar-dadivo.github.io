$(document).ready(function() {
    function onImagesLoaded(container, event) {
        var images = container.getElementsByTagName("img");
        var loaded = images.length;
        for (var i = 0; i < images.length; i++) {
            if (images[i].complete) {
                loaded--;
            }
            else {
                images[i].addEventListener("load", function() {
                    loaded--;
                    if (loaded == 0) {
                        event();
                    }
                });
            }
            if (loaded == 0) {
                event();
            }
        }
    }
    
    var container = document.getElementById("container");
    
    onImagesLoaded(container, function() {
        //alert("All the images have loaded");
        $('.loading-screen').fadeOut();
    });

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
