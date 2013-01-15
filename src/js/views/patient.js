
define([
    'jquery',
    'underscore',
    'backbone'
], function( $, _, Backbone ) {

    var Patientiew = Backbone.View.extend({

        template: _.template( $('#patient-details').html() ),

        render: function( eventName ) {
            $(this.el).html( this.template( this.model.toJSON() ) );
            return this;
        }

    });

    return PatientView;

});
