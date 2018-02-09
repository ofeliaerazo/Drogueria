'use strict';
(function(){

class CuidadoBebeComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('drogueriaApp')
  .component('cuidadoBebe', {
    templateUrl: 'app/cuidadoBebe/cuidadoBebe.html',
    controller: CuidadoBebeComponent
  });

})();
