/**
 * System module - Datetime computation.
 */
(function (document) {
    'use strict';

    /**
     * MODULE: Agenda
     *
     * @type {{loadAgenda: Function}}
     */
    var module_agenda = {

        /**
         * Initializes clock.
         */
        loadAgenda: function () {
            this.clock();
        },

        /**
         *
         */
        clock: function () {
            var timer = function () {
                var date = new Date();
                document.getElementById('module_agenda_clockDate').innerHTML = date.toDateString();
                document.getElementById('module_agenda_clockTime').innerHTML = date.toLocaleTimeString();
            }
            timer();
            window.setInterval(timer, 1000);
        }

    }

    /**
     * Start agenda module
     */
    module_agenda.loadAgenda();

})(document);
