/**
 * Main application template companion script.
 */
(function (document) {
    'use strict';

    /**
     * Get reference to application.
     */
    var app = document.querySelector('#app');

    /**
     * Define application "global" variables (influencing behavior beyond the scope of the template).
     */
    app.VERSION = '0.0.21-SNAPSHOT';
    app.PAGE = 'home';

    /**
     * Opens chrome://... link
     *
     * @param link
     */
    app.openChromeLink = function (event) {
        var link = event.target.dataset.link;
        chrome.tabs.create({ url: 'chrome://' + link });
    };

    /**
     *
     */
    app.openAboutDialog = function () {
        this.$.aboutDialog.open();
    };

    /**
     * Event listener for Polymer initialization.
     */
    window.addEventListener('WebComponentsReady', function () {
        console.log('Material New Tab Page is ready!');

        // Require identity token
        chrome.identity.getAuthToken({ 'interactive': true }, function (token) {});

    });


})(document);
