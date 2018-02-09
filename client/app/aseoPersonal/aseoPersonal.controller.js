'use strict';
(function(){

class AseoPersonalComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('drogueriaApp')
  .component('aseoPersonal', {
    templateUrl: 'app/aseoPersonal/aseoPersonal.html',
    controller: AseoPersonalComponent
  });

})();
