'use strict';

angular.module('drogueriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('header', {
        url: '/header',
        template: '<header></header>'
      });
  });
