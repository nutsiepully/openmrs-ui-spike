
define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
    'models/patient'
], function( _, Backbone, Store, Patient ) {

    var PatientCollection = Backbone.collection.extend({

        model: Patient,

        url: '/patients'
    });

    return PatientCollection;
})
