'use strict';
(function(){

  var app = angular.module('boton',['angulartics','angulartics.flurry']);

  app.config(function(){
    FlurryAgent.startSession("");
  });
})();
