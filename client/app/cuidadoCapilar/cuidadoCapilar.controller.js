'use strict';
(function(){

class CuidadoCapilarComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('drogueriaApp')
  .component('cuidadoCapilar', {
    templateUrl: 'app/cuidadoCapilar/cuidadoCapilar.html',
    controller: CuidadoCapilarComponent
  });

})();
