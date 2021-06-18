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
    console.log(this.toppings[i]);
    console.log(pizza1)
  };
}

MakeYourOwnPizza.prototype.addToppings = function()  {
  switch (this.toppings) {
    case (1):
      // this.toppings.push("Pineapple");
      this.cost += 1.00;
      break;
    case (2):
      // this.toppings.push("Mushrooms");
      this.cost += 1.00;
      break;
    case (3):
      // this.toppings.push("Artichoke Hearts");
      this.cost += 1.00;
      break;
    case (4):
      this.toppings.push("Red Onion");
      this.cost += 1.00;
      break;
    case (5):
      this.toppings.push("Black Olives");
      this.cost += 1.00;
      break;
    case (6):
      this.toppings.push("Garlic");
      this.cost += 1.00;
      break;
    case (10):
      this.toppings.push("Sausage");
      this.cost += 2.00;
      break;
    case (11):
      this.toppings.push("Bacon");
      this.cost += 2.00;
      break;
    case (12):
      this.toppings.push("Prosciutto");
      this.cost += 2.00;
      break;
    case (13):
      this.toppings.push("Pepperoni");
      this.cost += 2.00;
      break;
    case (14):
      this.toppings.push("Honey Baked Ham");
      this.cost += 2.00;
      break;
    case (15):
      this.toppings.push("Ground Beef");
      this.cost += 2.00;
      break;
    case (20):
      this.toppings.push("Gold Flakes");
      this.cost += 79.79;
      break;
  } 
};

const inputtedToppings = []
    $("input:checkbox[name=toppings]:checked").each(function() {
      inputtedToppings.push($(this).val());
    });


$(document).ready(function() {
  // attachContactListeners();
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    
    const inputtedPizzaSize = $("input:radio[name=size]:checked").val();
    const inputtedToppings = []
    $("input:checkbox[name=toppings]:checked").each(function() {
      inputtedToppings.push($(this).val());
    });
    let newPizza = new MakeYourOwnPizza(inputtedToppings, inputtedPizzaSize);
    newPizza.addSizeCost(newPizza.size);

   
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