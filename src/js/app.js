//app.js
'use strict';
(function(){

  var app = angular.module('boton',['angulartics','angulartics.flurry']);

  app.config(function(){
    FlurryAgent.startSession("6YCR2QKMC7FM2KD8SZ9K"); // Aquí escribes tu API key
  });
})();
