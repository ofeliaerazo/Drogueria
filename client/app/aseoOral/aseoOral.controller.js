'use strict';
(function(){

class AseoOralComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('drogueriaApp')
  .component('aseoOral', {
    templateUrl: 'app/aseoOral/aseoOral.html',
    controller: AseoOralComponent
  });

})();
