
define([
    'jquery',
    'underscore',
    'backbone'
], function( $, _, Backbone ) {

    var AppListItemView = Backbone.View.extend({

        tagName: 'li',

        template: _.template( $('#app-list-item').html() ),

        render: function( eventName ) {
            $(this.el).html( this.template( this.model.toJSON() ) );
            return this;
        }

    });

    return AppListItemView;

});
