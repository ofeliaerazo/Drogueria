'use strict';

describe('Component: TintesComponent', function () {

  // load the controller's module
  beforeEach(module('drogueriaApp'));

  var TintesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TintesComponent = $componentController('TintesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
