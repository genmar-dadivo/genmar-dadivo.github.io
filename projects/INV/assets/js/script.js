$(document).ready(function() {
    $('img').each(function(){
        var img = new Image();
        img.onload = function() {
            console.log($(this).attr('src') + ' - done!');
            $('.loading-screen').fadeOut();
        }
        img.src = $(this).attr('src');
    })
    
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
