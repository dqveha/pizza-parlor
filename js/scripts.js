
let pizza1 = new MakeYourOwnPizza();
function MakeYourOwnPizza(size) {
  this.toppings = {};
  this.size = "";
  this.cost = 0;
}

MakeYourOwnPizza.prototype.addSizeCost = function(size) {
  switch (size) {
    case ("bicycle"):
      this.size = "small bicycle";
      this.cost = 6.00;
      break;
  }
}

$(document).ready(function() {
  
});

/* Objectives of website --
1) Allow user to choose more than one topping + size
  Size: Bicycle (Small), Coupe (Medium), Sedan (Large), Van (XL)
2) Create a pizza object constructor with props for toppings and size
3) Create prototype method to see cost of pizza depending on selections chosen (branching?) */