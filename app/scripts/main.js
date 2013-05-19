require.config({
    paths: {
//        jquery: '../bower_components/jquery/jquery',
//        bootstrap: 'vendor/bootstrap',
        knockout: '../bower_components/knockout/build/output/knockout-latest'

//    },
//    shim: {
//        bootstrap: {
//            deps: ['jquery'],
//            exports: 'jquery'
//        }
    }
});

//require(['knockout', 'app', 'jquery', 'bootstrap'], function (ko, app, $) {
require(['knockout', 'appViewModel'], function (ko, vm) {
    'use strict';
    ko.applyBindings(new vm());
});
