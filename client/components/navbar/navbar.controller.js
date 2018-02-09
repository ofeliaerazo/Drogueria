'use strict';

class NavbarController {
  //start-non-standard

  menu = [{
    'title': 'Medicamentos',
    'state': 'main'
  },
  {
    'title': 'CuidadoCapilar',
    'state': 'main'
  },
  {
    'title': 'Cuidado de bebe',
    'state': 'main'
  },
  {
    'title': 'Aseo personal',
    'state': 'main'
  },
  {
    'title': 'Tintes',
    'state': 'main'
  },
  {
    'title': 'Aseo Oral',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard
  
  ocultarCollapse(){
   $('.navbar-collapse').collapse('hide');
                }

  constructor($scope) {
    this.mostrar = false;
    this.$scope = $scope;
    this.valor = "Inicial";
    this.positions = [false, false, false, false, false, false];
  }

  pasoMouse(numberItem, position){
    console.log('paso el mouse');this.mostrar = true;
    this.valor = "MegaMenu Producto " + numberItem;
    this.positions[position]= true;
  }

  quitoMouse(){
    this.positions = [false, false, false, false, false, false];
    this.mostrar = false;
    this.valor = "";
  }
}

angular.module('drogueriaApp')
  .controller('NavbarController', NavbarController);
