'use strict';

describe('Component: AseoOralComponent', function () {

  // load the controller's module
  beforeEach(module('drogueriaApp'));

  var AseoOralComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AseoOralComponent = $componentController('AseoOralComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
