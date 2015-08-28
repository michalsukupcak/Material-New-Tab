/**
 * Loads oauth token and verifier from server redirect and stores them into browser's localStorage.
 */
(function (document) {

    // Load query params
    var queryString = window.location.href.split('?')[1];
    var params = queryString.split('&');
    var requestToken = params[0].split('=')[1];
    var requestTokenVerifier = params[1].split('=')[1];

    // Load token from storage
    var requestTokenFromStorage = window.localStorage.getItem('material-new-tab-twitter-request-token');
    requestTokenFromStorage = requestTokenFromStorage.substring(0, requestTokenFromStorage.length - 1).substring(1);

    // Compare tokens, if equal store verifier, if not, throw error (should not happen)
    if (requestToken == requestTokenFromStorage) {
        window.localStorage.setItem('material-new-tab-twitter-request-token-verifier', '"' + requestTokenVerifier + '"');
    } else {
        throw "Received request token doesn't match request token from localstorage!";
    }

    // Close tab (as it is no longer needed)
    chrome.tabs.getCurrent(function (tab) {
        chrome.tabs.remove(tab.id);
    });

})(document);