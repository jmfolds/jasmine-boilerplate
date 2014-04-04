'use strict';

/*globals vw*/

describe("App", function() {
  var app, speak;

  beforeEach(function() {
    app = vw.App;
    // speak = vw.App.tellMeSomething;
  });

  it("App should not be null", function() {
      expect(app).not.toBe(null);
  });

  it("stubfields length should be 7", function() {
      expect(app.stubFields.length).toEqual(7);
  });
  describe("tellMeSomething", function() {
    it("should throw an exception without valid params", function() {
      expect(function() {
        app.tellMeSomething('Jeremy', null);
      }).toThrow('Missing parameters!');
    });
  });
});

describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar');

    foo.setBar(123);
    foo.setBar(456, 'another param');
  });

  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
  });

  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });

  it("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });
});
