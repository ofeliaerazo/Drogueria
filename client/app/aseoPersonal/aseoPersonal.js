'use strict';

angular.module('drogueriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('aseoPersonal', {
        url: '/aseoPersonal',
        template: '<aseo-personal></aseo-personal>'
      });
  });
