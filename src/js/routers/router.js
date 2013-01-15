
define([
       'jquery',
       'underscore',
       'backbone',
       'collections/patients',
       'views/patient_list',
       'views/patient'
], function( $, _, Backbone, PatientCollection, PatientListView, PatientView ) {

    var AppRouter = Backbone.Router.extend({

        routes: {
            "": "home",
            "patients/list": "patientsList",
            "patients/:id": "patientDetails"
        },

        home: function() {

        },

        patientList: function() {
            this.patientList = new PatientCollection();
            this.patientListView = new PatientListView( {model: this.patientList} );
            this.patientList.fetch();
            $('#sidebar').html( this.patientListView.render().el );
        },

        patientDetails: function( id ) {
            this.patient = this.patientList.get( id );
            this.patientView = new PatientView( {model: this.patient} );
            $('#content').html( this.patientView.render().el );
        }

    });

    var app = new AppRouter();
    Backbone.history.start();

});

