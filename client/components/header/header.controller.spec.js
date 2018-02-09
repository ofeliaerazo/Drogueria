'use strict';

describe('Component: HeaderComponent', function () {

  // load the controller's module
  beforeEach(module('drogueriaApp'));

  var HeaderComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    HeaderComponent = $componentController('HeaderComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
