
define([
    'underscore',
    'backbone'
], function( _, Backbone ) {

    var Patient = Backbone.Model.extend({

        name: function() {
            return this.attributes.firstName + ' ' + this.attributes.lastName;
        },

        url : function() {
            var base = 'patients';
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
        }

    });

    /*
     * Patient
     *  lastName
     *  firstname
     *  gender
     *  birthdate
     *  address
     *  EMR-ID
     *  telephone number
     */

    return Patient;
});
