'use strict';
(function(){

class HeaderComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('drogueriaApp')
  .component('header', {
    templateUrl: 'components/header/header.html',
    controller: HeaderComponent,
    controllerAs:'vm'
  });

})();
