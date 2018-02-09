'use strict';

describe('Component: MedicamentosComponent', function () {

  // load the controller's module
  beforeEach(module('drogueriaApp'));

  var MedicamentosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MedicamentosComponent = $componentController('MedicamentosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
