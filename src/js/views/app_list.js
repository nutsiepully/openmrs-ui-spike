
define([
    'jquery',
    'underscore',
    'backbone',
    'views/app_list_item'
], function( $, _, Backbone, AppListItemView) {

    var AppListView = Backbone.View.extend({

        tagName: 'ul',

        initialize: function() {
            this.model.bind( "reset", this.render, this );
        },

        render: function( eventName ) {
            _.each( this.model.models, function( app ) {
                $(this.el).append( new AppListItemView( {model: app} ).render().el );
            }, this);
            return this;
        }

    });

    return AppListView;

});
