function MakeYourOwnPizza(toppings, size) {
  this.toppings = toppings;
  this.extra = [];
  this.size = size;
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

let pizza1 = new MakeYourOwnPizza([1,2,3]);

MakeYourOwnPizza.prototype.loopAddToppings = function() {
  for (i = 0; i < this.toppings.length; i++) {
    let individualTopping = this.toppings[i];
    this.addToppings(individualTopping);
  };
}

MakeYourOwnPizza.prototype.addToppings = function(topping)  {
  switch (topping) {
    case (1):
    case (2):
    case (3):
    case (4):
    case (5):
    case (6):
      this.cost += 1.00;
      break;
    case (10):
    case (11):
    case (12):
    case (13):
    case (14):
    case (15):
      this.cost += 2.00;
      break;
    case (20):
      this.cost += 79.79;
      break;
  } 
};

const inputtedToppings = []
    $("input:checkbox[name=toppings]:checked").each(function() {
      inputtedToppings.push($(this).val());
    });


$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    const inputtedPizzaSize = $("input:radio[name=size]:checked").val();
    const inputtedToppings = []
    $("input:checkbox[name=toppings]:checked").each(function() {
      inputtedToppings.push(parseInt($(this).val()));
    });
    let newPizza = new MakeYourOwnPizza(inputtedToppings, inputtedPizzaSize);
    newPizza.addSizeCost(newPizza.size);
    newPizza.loopAddToppings();
    console.log(newPizza);
  });
});

// pizza1.toppings.forEach(function(element) {
//   console.log(element);});

// function attachContactListeners() {
//   $("input[type='checkbox']").on("click", function() {
//     pizza1.toppings.push($("input:checkbox[name=toppings]:checked").val())
//     // pizza1.toppings.push($("input:checkbox[name=toppings]:unchecked").val())
//     console.log("work?");
//   });
// }

// /* Objectives of website --
// 1) Allow user to choose more than one topping + size
//   Size: Bicycle (Small), Coupe (Medium), Sedan (Large), Van (XL)
//     Small Pizza: 8-10 inches with 6 slices.
//     Medium Pizza: 12 inches with 8 slices.
//     Large Pizza: 14 inch with 10 slices.
//     Extra-large Pizza: 16-18 inch with 12 slices.
// 2) Create a pizza object constructor with props for toppings and size
//     case (97):
//       //extra = .50 for certain types of toppings
//       this.cost += 0.50;
//       break;
//     case (98):
//       //extra = 1.50 
//       this.cost += 1.50;
//       break;
//     case (99):
//       //extra = 2.50
//       this.cost += 2.50;
//       break;
// 3) Create prototype method to see cost of pizza depending on selections chosen (branching?) 


// Pick toppings -- pushes into array (UI)
// forEach the array with an if statement (if element = 1,2,3,4,5,6... then add this amount..)
// Then submit..