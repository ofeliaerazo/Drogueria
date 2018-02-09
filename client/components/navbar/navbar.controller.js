'use strict';

class NavbarController {
  //start-non-standard

  ocultarCollapse(){
      $('.navbar-collapse').collapse('hide');
    }




/*  menu = [{
    'title': 'Medicamentos',
    'state': 'main'
  }];*/

    /*
  isCollapsed = true;
  //end-non-standard

  constructor() {
  }*/
}

angular.module('drogueriaApp')
  .controller('NavbarController', NavbarController);
