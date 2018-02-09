'use strict';

describe('Component: AseoPersonalComponent', function () {

  // load the controller's module
  beforeEach(module('drogueriaApp'));

  var AseoPersonalComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    AseoPersonalComponent = $componentController('AseoPersonalComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
