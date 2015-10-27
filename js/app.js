
$(document).ready(function () {
    var setSizeOfFullImage = function () {
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

        if (windowHeight > screen.availHeight) {
            windowHeight = screen.availHeight;
        }
        var fullImg = $('.full-img');
        fullImg.height(windowHeight - 51);
        fullImg.width(windowWidth);
    };

    setSizeOfFullImage();
    $(window).resize(setSizeOfFullImage);
});
