// 'use strict';

/*globals vw*/
// var $this = this;

describe("App", function() {
  var app;

  beforeEach(function() {
    app = vw.App;
  });

  it("App should not be null", function() {
      expect(app).not.toBe(null);
  });

  it("stubfields length should be 7", function() {
      expect(app.stubFields.length).toEqual(7);
  });

});
