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
    app.VERSION = '1.0.0 (Release candidate)';
    app.PAGE = 'home';

    app.pageChanged = function () {
        var color;
        switch (this.PAGE) {
            default:
            case 'home':
                color = '1E86BD';
                break;
            case 'news':
                color = '455A64';
                break;
            case 'youtube':
                color = 'CC181E';
                break;
            case 'twitter':
                color = '4099FF';
                break;
            case 'reddit':
                color = 'F2F2F2';
                break;
        }
        this.$.mainToolbar.style.backgroundColor = '#' + color;
    };

    app.openDrawer = function () {
        this.$.panel.openDrawer();
    };

    /**
     * Opens chrome://... link
     *
     * @param link
     */
    app.openChromeLink = function (event) {
        console.log(event.parentNode);
        var link = event.target.dataset.link;
        chrome.tabs.create({ url: 'chrome://' + link });
        this.$.panel.closeDrawer();
    };

    /**
     * Opens Chrome Web Store in new tab.
     */
    app.openWebStore = function () {
        chrome.tabs.create({ url: 'https://chrome.google.com/webstore' });
        this.$.panel.closeDrawer();
    };

    /**
     * Opens about dialog (with extension info).
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
        // chrome.identity.getAuthToken({ 'interactive': true }, function (token) {});

    });



})(document);
