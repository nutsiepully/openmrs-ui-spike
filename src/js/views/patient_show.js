
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
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }

    });

    return PatientShowView;

});
