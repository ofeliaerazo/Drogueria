'use strict';

describe('Component: CuidadoBebeComponent', function () {

  // load the controller's module
  beforeEach(module('drogueriaApp'));

  var CuidadoBebeComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CuidadoBebeComponent = $componentController('CuidadoBebeComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
