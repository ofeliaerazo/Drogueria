'use strict';
(function(){

class MedicamentosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('drogueriaApp')
  .component('medicamentos', {
    templateUrl: 'app/medicamentos/medicamentos.html',
    controller: MedicamentosComponent
  });

})();
