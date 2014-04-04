
/*global vw, Backbone */
if (!this.vw || typeof this.vw !== 'object') {
    this.vw = {};
}


(function () {
    'use strict';

    vw.App = new Backbone.Marionette.Application();

    vw.App.stubFields = [1, 2, 3, 4, 5, 6, 7];

    vw.App.tellMeSomething = function (name, msg) {
        if (!msg || !name) {
            throw 'Missing parameters!';
        }
        
        return 'Hi, ' + name + '. ' + msg;
    };

})();