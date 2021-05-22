/*global ok,test,module,deepEqual,equal,expect,notEqual,arrayUtils */
(function() {
  "use strict";
  module("bubblesort", {  });
  test("JSAV", function() {
    expect(5);
    ok( JSAV, "JSAV" );
    ok( JSAV.ext, "JSAV extensions");
    ok( JSAV.init, "JSAV init");
    var av = new JSAV("emptycontainer");
    ok( av, "JSAV initialized" );
    var arr = [3, 2, 1]
    var jsavArr = av.ds.array(arr, {layout: "bar"});
    JSAV.ext.bubblesort(av, jsavArr)
    av.end()

    deepEqual(jsavArr._values, [1, 2, 3], "Arrays are equal")
  });
})();