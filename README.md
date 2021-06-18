## **Test-Driven Development Specs**

#### **Describe: MakeYourOwnPizza();**

| Test:                                                               | Code:                                                                            | Output:                                  |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------- |
| "It should create an object with toppings, size, and cost property" | function MakeYourOwnPizza() {this.toppings = {}; this.size = ""; this.cost = 0;} |  {toppings: {…}, size: "large", cost: 0} |

#

#### **Describe: MakeYourOwnPizza.prototype.addSizeCost();**

| Test:                                                     | Code:                                                                                    | Expected Output:                                |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------- |
| "It should add size and cost to pizza instance"           | {switch (size) {case ("bicycle"): this.size = "small bicycle"; this.cost = 6.00; break;} | {toppings: {…}, size: "small bicycle", cost: 6} |
| "It should alert the user to choose a size if not chosen" | {switch (size) {default: alert("Please choose a size"); break;}                          | Alerts "Please choose a size"                   |

<!-- template

Describe:
| Test:    | Code:    | Expected Output:      |
| ---------|----------|-----------------------|


-->
