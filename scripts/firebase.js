var FIREBASE = {

    email: null,
    password: null,

    init: function () {
        if (!this.firebase) {
            this.firebase = new Firebase("https://material-new-tab.firebaseio.com");
        }
    },

    get: function () {
        this.init();
        return this.firebase;
    }

};

