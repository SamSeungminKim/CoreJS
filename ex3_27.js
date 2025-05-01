// Core JavaScript Practice by Seungmin Kim

var obj = {
  outer: function() {
    console.log(this);
    var innerFunc = function() {
      console.log(this);
    };
    innerFunc.call(this);
  },
};
obj.outer();

var obj2 = {
  outer2: function() {
    console.log(this);
    var innerFunc2 = function() {
      console.log(this);
    }.bind(this);
    innerFunc2();
  },
};
obj2.outer2();