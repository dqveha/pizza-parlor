# Pizza Parlor [Constructor & Prototype Project]

## [https://github.com/dqveha/pizza-parlor](https://github.com/dqveha/pizza-parlor)

## [https://dqveha.github.io/pizza-parlor/](https://dqveha.github.io/pizza-parlor/)

#### By Dave Lindqvist

## Technologies Used

1. HTML
2. CSS/Bootstrap v5.0.0
3. Javascript/jQuery v3.6.0

## Description

This is the fourth independent project given by Epicodus to test for the use of preparing and creating constructor and prototype methods. The objectives are to allow the user to choose toppings and size for their pizza, create a pizza object constructor, and create a prototype method to add the cost altogether.

This page utilizes radio and checkmark inputs with specifically values behind each choice. The business logic interprets the values into cost and then displayed through the user interface logic portion.

## Setup/Installation Requirements:

### Installation requirements

    * Computer with browser
    * Internet

### Setup

    1. Download or clone the repository onto your desktop.
    2. Open the respective .zip file then enter the new folder called "pizza-parlor-main."
    3. Open index.html using a browser such as Mozilla or Chrome.

## Known Bugs

1. Currently not aware of any bugs. Please contact me if you find one!

## License

This software is licensed under the MIT license.

Copyright © 2021 Dave Lindqvist

## Contact Information

Dave Lindqvist (Lindqvist.Dave@gmail.com)

#### Below is the Test-Driven Development (TDD) logic while working on this project.

## **Test-Driven Development Specs**

#### **Describe: MakeYourOwnPizza();**

| Test:                                                               | Code:                                                                                                  | Output:                                            |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| "It should create an object with toppings, size, and cost property" | `function MakeYourOwnPizza() {this.toppings = []; this.size = ""; this.cost = 0; this.sides = sides;}` |  {toppings: [], size: "large", cost: 0, sides: ""} |

#

#### **Describe: MakeYourOwnPizza.prototype.addSizeCost();**

| Test:                                                     | Code:                                                                                      | Expected Output:                                |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| "It should add size and cost to pizza instance"           | `{switch (size) {case ("bicycle"): this.size = "small bicycle"; this.cost = 6.00; break;}` | {toppings: {…}, size: "small bicycle", cost: 6} |
| "It should alert the user to choose a size if not chosen" | `{switch (size) {default: alert("Please choose a size"); break;}`                          | Alerts "Please choose a size"                   |

#

#### Describe: **MakeYourOwnPizza.prototype.addToppings();**

| Test:                                 | Code:                                                                                      | Expected Output:                                             |
| ------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| "It should add topping into an array" | `{switch (topping) {case (1): this.toppings.push("Pineapple"); this.cost += 1.00; break;}` | {toppings: Array["Pineapple"], extra: [], size: "", cost: 1} |

#

#### Describe: **MakeYourOwnPizza.prototype.loopAddToppings**

| Test:                                                                        | Code:                                                                                                                           | Expected Output:                                                                                                   |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| "It should loop through topping element one at a time and then add its cost" | `for (i = 0; i < this.toppings.length; i++) {let individualTopping = this.toppings[i]; this.addToppings(individualTopping);}; ` | {toppings: Array(2), extra: Array(0), size: "Small Bicycle", cost: 8} [bicycle = $6.00 & 2 $1.00 toppings = $8.00] |

#

#### Describe: **MakeYourOwnPizza.prototype.loopAddSides** & **MakeYourOwnPizza.prototype.addSides();**

Very similar coding to loopAddToppings and addToppings as seen here which outputs:

```
MakeYourOwnPizza.prototype.loopAddSides = function () {
  for (i = 0; i < this.sides.length; i++) {
    let individualSide = this.sides[i];
    this.addSides(individualSide);
  }
};

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
```
