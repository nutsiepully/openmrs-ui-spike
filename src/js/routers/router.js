
define([
       'jquery',
       'underscore',
       'backbone',
       'collections/patients',
       'models/patient',
       'views/patient_list',
       'views/patient_modify',
       'views/patient_show'
], function( $, _, Backbone, patientCollection, Patient, PatientListView, PatientModifyView, PatientShowView ) {

    var AppRouter = Backbone.Router.extend({

        routes: {
            "": "home",
            "patients/new": "patientNew",
            "patients/edit/:id": "patientEdit",
            "patients/show/:id": "patientShow",
            "patients/list": "patientsList"
        },

        home: function() {

        },

        patientNew: function() {
            new PatientModifyView( {model: new Patient()} );
        },

        patientEdit: function( id ) {
            var patient = new Patient( {id: id} );

            patient.fetch({
                success: function( patient, resp ) {
                    new PatientModifyView( {model: patient} );
                },
                error: function() {
                    new Error( {message: 'Could not find the patient.'} );
                    window.location.hash = '#';
                }
            });
        },

        patientShow: function( id ) {
            var patient = patientCollection.get( id );

            return new PatientShowView( {model: patient} );

//            var patient = new Patient( {id: id} );
//
//            patient.fetch({
//                success: function( patient, resp ) {
//                    new PatientShowView( {model: patient} );
//                },
//                error: function() {
//                    new Error( {message: 'Could not find the patient.'} );
//                    window.location.hash = '#';
//                }
//            });
        },

        patientsList: function() {
            var patients = PatientCollection.Documents();

            patients.fetch({
                success: function() {
                    new PatientListView( {collection: patients} );
                },
                error: function() {
                    new Error({ message: "Error loading documents." });
                    window.location.hash = '#'
                }
            });
        }

    });

    return AppRouter;

});
