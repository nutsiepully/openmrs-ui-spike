
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
    'routers/router',
    'collections/patients'
], function( PatientListView, Workspace, patientCollection ) {

    patientCollection.create( {firstName: 'Pulkit', lastName: 'Bhuwalka', 'gender': 'male', birthDate: '13 Sep', address: 'address', number: 'number' } );
    patientCollection.create( {firstName: 'Calvin', lastName: 'Hobbes', 'gender': 'male', birthDate: '13 Sep', address: 'address', number: 'number' } );
    patientCollection.create( {firstName: 'V', lastName: 'Vendetta', 'gender': 'male', birthDate: '13 Sep', address: 'address', number: 'number' } );

    new Workspace();
    Backbone.history.start();

    new PatientListView();
});
