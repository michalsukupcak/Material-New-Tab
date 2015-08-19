/**
 *
 * @param message
 * @private
 */
function __toast(message) {
    var toast = document.querySelector('paper-toast#toast');
    toast.text = message;
    toast.show();
}

/**
 * Displays an error message in a paper-toast container.
 *
 * @param message
 * @private
 */
function __error(message, event) {
    var m = 'Ooops! Error: ' + message + ' (See console for details.)';
    __toast(m);
    throw 'ERROR: ' + event.detail.error.message
}


/**
 * Shows loading overlay.
 *
 * @private
 */
function __showLoadingOverlay() {
    document.getElementById('loadingOverlay').style.display = 'block';
}

/**
 * Hides loading overlay.
 *
 * @private
 */
function __hideLoadingOverlay() {
    document.getElementById('loadingOverlay').style.display = 'none';
}