$(document).ready(function() {
    $('.loading-screen').fadeOut();
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