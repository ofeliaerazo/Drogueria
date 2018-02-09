'use strict';
(function(){

class HeaderComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('drogueriaApp')
  .component('header', {
    templateUrl: 'componets/header/header.html',
    controller: HeaderComponent
  });

})();
