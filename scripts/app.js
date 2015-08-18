(function (document) {
    'use strict';

    /**
     * Main App object.
     *
     * @type {{checkReadyState: Function, hideLoading: Function, setElementHeights: Function}}
     */
    var app = {

        /**
         *
         */
        iframeHeight: 0,

        /**
         * Checks document ready state. Once ready, removes loading overlay and sets element heights.
         */
        checkReadyState: function () {
            var interval = setInterval(function() {
                if (document.readyState === 'complete') {
                    console.log('Material New Tab Page is loaded.');
                    app.removeLoadingOverlay();
                    app.setOverflowLinks();
                    app.setDrawerLinks();
                    app.setElementHeights();
                    app.setTabContentLoaders();
                    clearInterval(interval);
                }
            });
        },

        /**
         * Removes loading overlay.
         */
        removeLoadingOverlay: function () {
            var loading = document.getElementById('loadingOverlay');
            loading.style.opacity = 0;
            setTimeout(function () {
                loading.style.display = 'none';
            }, 200);
        },

        /**
         *
         */
        setOverflowLinks: function () {
            var settingsPage = document.getElementById('settingsPage');
            document.getElementById('openSettings').addEventListener('click', function () {
                settingsPage.style.display = 'block';
                window.setTimeout(function () {
                    settingsPage.style.opacity = 1;
                }, 10);
            });
            document.getElementById('closeSettings').addEventListener('click', function () {
                settingsPage.style.opacity = 0;
                window.setTimeout(function () {
                    settingsPage.style.display = 'none';
                }, 200);
            });
            var aboutPage = document.getElementById('aboutPage');
            document.getElementById('openAbout').addEventListener('click', function () {
                aboutPage.style.display = 'block';
                window.setTimeout(function () {
                    aboutPage.style.opacity = 1;
                }, 10);

            });
            document.getElementById('closeAbout').addEventListener('click', function () {
                aboutPage.style.opacity = 0;
                window.setTimeout(function () {
                    aboutPage.style.display = 'none';
                }, 200);
            });
        },

        /**
         * Sets click handlers for chrome://... links.
         */
        setDrawerLinks: function () {
            var drawerChromeLinks = document.getElementsByClassName('drawerChromeLink');
            for (var i = 0; i < drawerChromeLinks.length; i++) {
                drawerChromeLinks[i].onclick = function () {
                    chrome.tabs.create({
                        url: this.getAttribute('data-href')
                    });
                }
            }
        },

        /**
         * Sets heights to <iframe> and <div class="homeCard"> elements.
         */
        setElementHeights: function() {

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
            this.iframeHeight = windowHeight - headerHeight - 16 - 16 - 2; // mdl-grid margin + padding

        },

        /**
         *
         */
        setTabContentLoaders: function () {
            var tabs = document.getElementsByClassName('tab');
            for (var i = 0; i < tabs.length; i++) {
                var tab = tabs[i];
                tab.addEventListener('click', function () {
                    var id = this.getAttribute('href').match(/#tab-([a-zA-Z0-9]+)/)[1];
                    if (id != 'home') {
                        var div = document.getElementById('iframe-' + id);
                        if (div.childNodes[0] == null) {
                            var src = div.getAttribute('data-src');
                            var iframe = document.createElement('iframe');
                            iframe.setAttribute('src', src);
                            iframe.height = app.iframeHeight;
                            div.appendChild(iframe);
                        }
                    }
                });
            }
        }

    };

    /**
     * Start application.
     */
    app.checkReadyState();

    /**
     * On window resize, reset element heights.
     */
    window.onresize = function () {
        app.setElementHeights();
    }

})(document);
