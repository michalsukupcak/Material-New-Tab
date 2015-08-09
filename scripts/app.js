/* ------------------------------------------------------------------------------------------------------------------ */
/**
 * On extension load, hide div#loading.
 */
var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        hideLoading();
        init();
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

function init() {
    var windowHeight = window.innerHeight;
    var headerHeight = document.getElementById('header').clientHeight;
    var iframeHeight = windowHeight - headerHeight - 80;
    var iframes = document.getElementsByClassName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].height = iframeHeight;
    }
}

