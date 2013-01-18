
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/patient_show.html'
], function( $, _, Backbone, patientShowTemplate ) {

    var PatientShowView = Backbone.View.extend({

        el: '.hero-unit',

        template: _.template( patientShowTemplate ),

        initialize: function() {
            this.listenTo( this.model, 'all', this.render);
            this.render();
        },

        render: function() {
            patientJson = this.model.toJSON();
            _.extend( patientJson, {name: this.model.name()} );
            this.$el.html( this.template( patientJson ) );
            return this;
        }

    });

    return PatientShowView;

});
