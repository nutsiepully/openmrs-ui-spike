
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/patient_list_item.html'
], function( $, _, Backbone, patientListItemTemplate ) {

    var PatientListItemView = Backbone.View.extend({

        tagName: 'li',

        template: _.template( patientListItemTemplate ),

        initialize: function() {
            this.listenTo( this.model, 'all', this.render );
            this.render();
        },

        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        }

    });

    return PatientListItemView;

});
