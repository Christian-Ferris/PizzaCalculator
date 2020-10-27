function pizzaCalculator()
{
    //Get the number of coworkers and convert
var numberOfCoworkers = parseInt(prompt("How many coworkers are eating this pizza with you?"));

    //Get the number of toppings and convert
var toppings = parseInt(prompt("How many toppings are you having?"));

    //Multiply amount of toppings by 1.25
var toppingPrice = toppings*1.25;

    //Add 15 to the calculation for total pizza cost
var totalCost = toppingPrice+15;

    //Divide total cost by number of contributors (coworkers + 1)
var pricePerPerson = totalCost/(numberOfCoworkers+1);

    //Display the price each person has to pay
var pricePerPersonDisplay = pricePerPerson.toFixed(2);

alert(`Each person has to pay $${pricePerPersonDisplay} for this pizza`);

}