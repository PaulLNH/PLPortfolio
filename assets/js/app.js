$(document).ready(function () {
    // INITIATE THE FOOTER
    siteFooter();
    $(window).resize(function () {
        siteFooter();
    });

    // Parallax footer
    function siteFooter() {
        var siteContent = $("#site-content");
        var siteContentHeight = siteContent.height();
        var siteContentWidth = siteContent.width();

        var siteFooter = $("#site-footer");
        var siteFooterHeight = siteFooter.height();
        var siteFooterWidth = siteFooter.width();

        siteContent.css({
            "margin-bottom": siteFooterHeight + 40
        });
    }
});

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

console.log("I knew I'd find you here. Send me an email and we'll talk. plaird83@gmail.com")