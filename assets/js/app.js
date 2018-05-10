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