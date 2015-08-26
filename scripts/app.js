/**
 * Defines application version.
 *
 * @type {string}
 */
var APP_VERSION = '1.3.2';

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
     * Updates app content.
     */
    app.updateElements = function () {
        while (this.$.container.firstChild) {
            this.$.container.removeChild(this.$.container.firstChild);
        }
        if (FIREBASE.get().getAuth()) {
            Polymer.dom(this.$.container).appendChild(document.createElement('x-app'));
        } else {
            Polymer.dom(this.$.container).appendChild(document.createElement('x-login'));
        }
    };

    /**
     * Event listener for Polymer initialization.
     */
    window.addEventListener('WebComponentsReady', function () {
        console.log('Material New Tab is ready!');
        app.updateElements();
    });

    /**
     * Updates app content on user login.
     */
    window.addEventListener('__userLogin', function () {
        app.updateElements();
    });

    /**
     * Updates app content on user logout.
     */
    window.addEventListener('__userLogout', function () {
        app.updateElements();
    });

})(document);
