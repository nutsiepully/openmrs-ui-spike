
require.config({

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    },

    paths: {
        jquery: 'lib/jquery/jquery',
        underscore: 'lib/underscore/underscore',
        backbone: 'lib/backbone/backbone',
        backboneLocalstorage: 'lib/backbone/backbone.localStorage',
        bootstrap: 'lib/bootstrap/bootstrap',
        text: 'lib/require/text'
    }
});

require([
    'views/patient_list',
    'routers/router'
], function( PatientListView, Workspace ) {

    new Workspace();
    Backbone.history.start();

    new PatientListView();
});
