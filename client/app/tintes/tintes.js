'use strict';

angular.module('drogueriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tintes', {
        url: '/tintes',
        template: '<tintes></tintes>'
      });
  });
