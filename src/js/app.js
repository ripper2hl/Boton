'use strict';
(function(){

  var app = angular.module('boton',['angulartics','angulartics.flurry']);

  app.config(['$analyticsProvider',function($analyticsProvider){
    FlurryAgent.startSession("");
  }]);

  app.controller('botonCtrl',['$scope',function($scope){

  }]);

})();
