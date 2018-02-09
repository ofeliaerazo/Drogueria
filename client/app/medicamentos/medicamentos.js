'use strict';

angular.module('drogueriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('medicamentos', {
        url: '/medicamentos',
        template: '<medicamentos></medicamentos>'
      });
  });
