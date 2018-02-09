'use strict';

angular.module('drogueriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cuidadoCapilar', {
        url: '/cuidadoCapilar',
        template: '<cuidado-capilar></cuidado-capilar>'
      });
  });
