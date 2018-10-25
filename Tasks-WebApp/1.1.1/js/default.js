//Create the Angular Application and load each module
var angularApp = angular.module('angularApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngAnimate'])

//Run at the start of the Angular Application
angularApp.run(function ($rootScope) {

    $rootScope.user = {};
    console.log('Default Processed');

});