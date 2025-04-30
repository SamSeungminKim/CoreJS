// Core JavaScript Practice by Seungmin Kim

function a() {
  var b;
  var b = function b() {}; // ← 바뀐 부분

  console.log(b); // (1)
  b = 'bbb';
  console.log(b); // (2)
  console.log(b); // (3)
}
a();