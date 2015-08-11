/* ------------------------------------------------------------------------------------------------------------------ */
/**
 * On extension load, hide div#loading.
 */
var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        hideLoading();
        setHeights();
    }
}, 10);

function hideLoading() {
    var loading = document.getElementById('loading');
    clearInterval(readyStateCheckInterval);
    loading.style.opacity = 0;
    setTimeout(function () {
        loading.style.display = 'none';
    }, 200);
}

function setHeights() {

    // Get heights
    var windowHeight = window.innerHeight;
    var headerHeight = document.getElementById('header').clientHeight;

    // Cards
    var homeCardTitleHeight = document.getElementsByClassName('homeCardTitle')[0].clientHeight;
    var homeCardActionsHeight = document.getElementsByClassName('homeCardActions')[0].clientHeight;
    var homeCardHeight = windowHeight - headerHeight - 16 - 16 - homeCardTitleHeight - 32 - homeCardActionsHeight - 16 - 6;
    var homeCards = document.getElementsByClassName('homeCard');
    for (var i = 0; i < homeCards.length; i++) {
        homeCards[i].getElementsByClassName('homeCardContent')[0].style.height = homeCardHeight + 'px';
    }

    // Iframes
    var iframeHeight = windowHeight - headerHeight - 16 - 16; // mdl-grid margin + padding
    var iframes = document.getElementsByClassName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].height = iframeHeight;
    }

}

window.onresize = function () {
    setHeights();
}