
define([
    'jquery',
    'underscore',
    'backbone'
], function( $, _, Backbone ) {

    var PatientListItemView = Backbone.View.extend({

//        tagName: 'li',
//
//        template: _.template( $('#patient-list-item').html() ),
//
//        render: function( eventName ) {
//            $(this.el).html( this.template( this.model.toJSON() ) );
//            return this;
//        }

    });

    return PatientListItemView;

});
