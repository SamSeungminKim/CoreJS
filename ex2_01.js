// Core JavaScript Practice by Seungmin Kim

// -------------------------- (1)
var a = 1;
function outer() {
    console.log(a); // 1
  function inner() {
    console.log(a); // undefined
    var a = 3;
  }
  inner(); // ------------ (2)
  console.log(a); // 1
}
outer(); // ---------------- (3)
console.log(a); // 1