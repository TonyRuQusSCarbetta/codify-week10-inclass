// // $("#firstButton").click(function() {
// //   $(".row").toggleClass("animated rotateIn");
// // });
//
// function Mother(kids, hair, home, shoes) {
//   this.kids = kids;
//   this.kids = hair;
//   this.kids = shoes;
// }
//
// //prototypal inheritance..
// //is an easy way to add dresses to Mother
// //use .prototype in the console to see all the methods you can use.
// Mother.prototype.dresses = true;
//
// var myMom = new Mother(3, "red", null);
// console.log(myMom);
//
// //.this ===== is the call site of where it is called.. or the parent of where it's being called


function Pizza(name, meats, veggies, crust, cheese) {
    this.name = name;
    this.meats = meats;
    this.veggies = veggies;
    this.crust = crust;
    this.cheese = cheese;
    this.crustType = function() {
      return(`The crust type is ${this.crust}.`);
  };

}


var hawaiian = new Pizza("Hawaiian","pepporoni", "green peppers", "stuffed", "xtra");

console.log(hawaiian.crustType());


// use debugger;
//and go to sources,
//click your line number / break point
//use
//console.table
//









// var cheese = new Pizza("cheese",null, null, "regular", "triple");
// var hawaiian = new Pizza("hawaiian","pepporoni", "pineapple", "regular", "regular");
// console.log(pepporoni);

// console.log(pepporoni);
// console.log(cheese);
// console.log(hawaiian);
//
// Pizza();
