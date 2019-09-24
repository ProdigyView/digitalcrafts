/**
 * Vending Machine Group Exercise

Vending Machines give us the ability to buy food and drink anywhere we go! You are hired as a contractor to write a vending machine application for a new line of vending machines to be released.

The vending machine will have the following items and prices:
Snickers  $1.25
Popcorn   $1.00
Chewing Gum $0.25
Nuts $0.50
Cookies $1.70
Cup Noodles $2.25

The vending machine can accept the following currency:
Nickel $0.05
Dime $0.10
Quarter $.25
Dollar $1.00

When a person is buying from the vending machine, the following happen:
- A list of items is shown to them with the prices
- They insert money into the machine based on the allowed currency above
- They then select their item and the following can happen:
-- If the amount entered is less than what the item cost, an error message is produced stating they have not entered enough money
-- If the amount is equal to or above the amount of the item, they should get their item and left over change, if any
-- If they do not choose an item, all the money can be returned to them

Your task is to create a simulation in which 5 different buyers attempt to buy an item from the vending machine. Remember everything we have learned in class to use are your disposal:
- If Statements
- For Loops
- Arrays
- Objects
- Functions

With a partner, please discuss the problem by laying each piece of the problem 1 step at a time, and work your way through the problem.

 */


 var VendingMachine = {
     //The Snacks In The Machine
     //Objects can exist within objects
     snacks: {
         snickers : {price: 1.25, name: "Snickers"},
         popcorn : {price: 1.00, name : "Popcorn"},
         chewing_gum : {price: 0.25, name : "Winter Fresh"},
         nuts : {price: 0.50, name : "Nuts"},
         cookies : {price: 1.75, name : "Cookies"},
         cup_noodles : {price: 2.25, name : "Cup Noodes"}
     },
     //The allowed currency units that can be added
     allowedCurrencies : {
         nickel : {value: .05},
         dime: {value: 0.10},
         quarter : {value: 0.25},
         dollar: {value: 1.00}
     },
     //The total amount of funds deposited
     totalTendered: 0,
     //Add funds to the machine
     depositCurrency : function(currency) {

         if(this.allowedCurrencies[currency]) {
             this.totalTendered += this.allowedCurrencies[currency].value;
         } else {
             console.log("Invalid Currency Entered");
         }
     },
     //Select an item to vend
     selectItem : function(item) {

         if(!this.snacks[item]) {
            console.log("Invalid Input. Choosen snack not in machine.");
         } else if(this.snacks[item] && this.canPurchase(item)) {
            this.vendItem(item);
         } else {
             console.log("Not Enough Funds To Purchase Item");
         }
     },
     //Determines if an item can be purchased based
     //on the amount deposited
     canPurchase : function(item) {
        
        if(this.snacks[item].price > this.totalTendered) {
            return false;
        }

        return true;
     },
    //Give the user their item
     vendItem: function(item) {
        var snack = this.snacks[item];

        console.log("Here is your item: " + snack.name);
        this.totalTendered -= snack.price;
        this.returnChange();

     },
     //Return any funds to the user
     returnChange : function()  {
        
        if(this.totalTendered > 0) {
            console.log("Returning Change: " + this.totalTendered);
        } else {
            console.log("There is no change to return");
        }

        this.totalTendered = 0;
     }
 };

 //And an array of people to make purchases
 //The people are objects inside the array
 var people = [
    { 
        name: "John Doe", 
        wants: "cookies", 
        currencies : ["dollar", "dollar"]
    },
    {
        name: "Sarah Parker", 
        wants: "popcorn", 
        currencies : ["quarter", "quarter","dime"]
    },
    {
        name: "Toya Brown", 
        wants: "cookies", 
        currencies : ["quarter", "quarter","quarter", "dollar"]
    },
    {
        name: "Naruto Uzamaki", 
        wants: "ramen", 
        currencies : ["100_yen", "50_yen"]
    },
 ];

 //Iterate with for loop through people array
 for(var i=0; i<people.length; i++) {
    
    //Get The Person At The Current Index 
    var person = people[i];

    //Show The Snacks To The Person
    console.log("Purchaser:" + person.name);
    console.log(VendingMachine.snacks);

    //Deposit Funds
    for(var j=0; j<person.currencies.length; j++) {
        console.log(person.name + " deposits " + person.currencies[j]);
        VendingMachine.depositCurrency(person.currencies[j])
    }

    //Select the item
    console.log(person.name + " wants " + person.wants);
    VendingMachine.selectItem(person.wants);

    //Get any left over change
    if(VendingMachine.totalTendered > 0){
        VendingMachine.returnChange();
    }

    console.log();
    console.log("--------------");
    console.log();

 }
