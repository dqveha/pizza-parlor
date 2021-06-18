
let pizza1 = new MakeYourOwnPizza();
function MakeYourOwnPizza(size) {
  this.toppings = {};
  this.size = "";
  this.cost = 0;
}

MakeYourOwnPizza.prototype.addSizeCost = function(size) {
  switch (size) {
    case ("bicycle"):
      this.size = "Small Bicycle";
      this.cost = 6.00;
      break;
    case ("coupe"):
      this.size = "Medium Coupe";
      this.cost = 8.00;
      break;
    case ("sedan"):
      this.size = "Large Sedan";
      this.cost = 10.00;
      break;
    case ("van"):
      this.size = "X-Large Van";
      this.cost = 12.00;
      break;
    default: 
      alert("Please choose a size");
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