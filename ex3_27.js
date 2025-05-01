// Core JavaScript Practice by Seungmin Kim

var obj = {
  outer: function() {
    console.log(this);  //{outer: ƒ}
    var innerFunc = function() {
      console.log(this);  //{outer: ƒ}
    };
    innerFunc.call(this);
  },
};
obj.outer();

var obj2 = {
  outer2: function() {
    console.log(this);  //{outer2: ƒ}
    var innerFunc2 = function() {
      console.log(this);  //{outer2: ƒ}
    }.bind(this);
    innerFunc2();
  },
};
obj2.outer2();