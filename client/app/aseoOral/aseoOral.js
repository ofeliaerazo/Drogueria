'use strict';

angular.module('drogueriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('aseoOral', {
        url: '/aseoOral',
        template: '<aseo-oral></aseo-oral>'
      });
  });
