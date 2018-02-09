'use strict';
(function(){

class TintesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('drogueriaApp')
  .component('tintes', {
    templateUrl: 'app/tintes/tintes.html',
    controller: TintesComponent
  });

})();
