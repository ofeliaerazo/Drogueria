'use strict';

describe('Component: CuidadoCapilarComponent', function () {

  // load the controller's module
  beforeEach(module('drogueriaApp'));

  var CuidadoCapilarComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CuidadoCapilarComponent = $componentController('CuidadoCapilarComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
