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
    var m = 'Ooops! An error occured: ' + message + ' (See console for details.)';
    __toast(m);
    if (event.detail.error.message) {
        throw 'APPLICATION ERROR: ' + event.detail.error.message;
    } else {
        throw 'APPLICATION ERROR:' + event.detail.error;
    }
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
