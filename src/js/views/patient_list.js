
define([
    'jquery',
    'underscore',
    'backbone',
    'views/patient_list_item'
], function( $, _, Backbone, PatientListItemView ) {

    var PatientListView = Backbone.View.extend({

        tagName: 'ul',

        initialize: function() {
            this.model.bind( "reset", this.render, this );
        },

        render: function( eventName ) {
            _.each( this.model.models, function( patient ) {
                $(this.el).append( new PatientListItemView( {model: patient} ).render().el );
            }, this);
            return this;
        }

    });

    return PatientListItemView;

});
