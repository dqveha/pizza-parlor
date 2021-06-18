function MakeYourOwnPizza(toppings, size, sides) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
  this.sides = sides;
}

MakeYourOwnPizza.prototype.addSizeCost = function (size) {
  switch (size) {
    case "bicycle":
      this.size = "Small Bicycle";
      this.cost += 6;
      break;
    case "coupe":
      this.size = "Medium Coupe";
      this.cost += 8;
      break;
    case "sedan":
      this.size = "Large Sedan";
      this.cost += 10;
      break;
    case "van":
      this.size = "X-Large Van";
      this.cost += 12;
      break;
    default:
      alert("Please choose a size");
      break;
  }
};

MakeYourOwnPizza.prototype.loopAddSides = function () {
  for (i = 0; i < this.sides.length; i++) {
    let individualSide = this.sides[i];
    this.addSides(individualSide);
  }
};

MakeYourOwnPizza.prototype.addSides = function (side) {
  switch (side) {
    case 1:
      this.cost += 5;
      break;
    case 2:
      this.cost += 8;
      break;
    case 3:
      this.cost += 8;
      break;
    case 4:
      this.cost += 10;
      break;
    case 5:
      this.cost += 5;
      break;
    default:
      break;
  }
};

MakeYourOwnPizza.prototype.loopAddToppings = function () {
  for (i = 0; i < this.toppings.length; i++) {
    let individualTopping = this.toppings[i];
    this.addToppings(individualTopping);
  }
};

MakeYourOwnPizza.prototype.addToppings = function (topping) {
  switch (topping) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      this.cost += 1.0;
      break;
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
      this.cost += 2.0;
      break;
    case 20:
      this.cost += 79.79;
      break;
    default:
      break;
  }
};

$(document).ready(function () {
  $("form#pizza-order").submit(function (event) {
    event.preventDefault();
    const inputtedPizzaSize = $("input:radio[name=size]:checked").val();
    const inputtedToppings = [];
    const inputtedSides = [];
    $("input:checkbox[name=toppings]:checked").each(function () {
      inputtedToppings.push(parseInt($(this).val()));
    });
    $("input:checkbox[name=side]:checked").each(function () {
      inputtedSides.push(parseInt($(this).val()));
    });
    let newPizza = new MakeYourOwnPizza(
      inputtedToppings,
      inputtedPizzaSize,
      inputtedSides
    );
    newPizza.addSizeCost(newPizza.size);
    newPizza.loopAddToppings();
    newPizza.loopAddSides();
    console.log(newPizza);

    $("#total-pizza-cost").html("$" + newPizza.cost.toFixed(2));
  });
});
