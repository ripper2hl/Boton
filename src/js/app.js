'use strict';
(function(){

  var app = angular.module('boton',['angulartics','angulartics.flurry']);

  app.config(['$analyticsProvider',function($analyticsProvider){
    FlurryAgent.startSession("6YCR2QKMC7FM2KD8SZ9K");
  }]);

  app.controller('botonCtrl',['$scope',function($scope){

  }]);

})();
