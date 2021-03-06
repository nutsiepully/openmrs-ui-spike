
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/patient_modify.html',
    'collections/patients',
    'routers/router'
], function( $, _, Backbone, patientModifyTemplate, patientCollection, Router ) {

    var PatientModifyView = Backbone.View.extend({

        el: '.hero-unit',

        events: {
            'submit form': 'save'
        },

        template: _.template( patientModifyTemplate ),

        initialize: function() {
            this.listenTo( this.model, 'all', this.render );
            this.render();
        },

        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        },

        modelFromInterface: function() {
            return {
                firstName: this.$('[name=firstName]').val(),
                lastName: this.$('[name=lastName]').val(),
                gender: this.$('[name=gender]').val(),
                birthDate: this.$('[name=birthDate]').val(),
                address: this.$('[name=address]').val(),
                number: this.$('[name=number]').val()
            };
        },

        clearInput: function() {
            this.$('[name=firstName]').val('');
            this.$('[name=lastName]').val('');
            this.$('[name=gender]').val('');
            this.$('[name=birthDate]').val('');
            this.$('[name=address]').val('');
            this.$('[name=number]').val('');
        },

        save: function() {
            if (this.model.isNew()) {
                this.model = patientCollection.create( this.modelFromInterface() );
            } else {
                this.model.save( this.modelFromInterface() );
            }
            this.clearInput();

            Router.route( '#patients/show/' + this.model.attributes.id );
        }

    });

    return PatientModifyView;

});
