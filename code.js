$(document).ready(
    function ()
    {
        // add event listener (clicks, etc.)
        $("button").click(calculateCost);

        function calculateCost() {
            //Gather input from id="people"
            var people = $("#people").val();

            //convert to a number (no decimals)
            people = parseInt(people);

            //Gather input from id="toppings"
            var toppings = $("#toppings").val();

            //convert to a number (no decimals)
            toppings = parseInt(toppings);

            /*
            PERFORM CALCULATIONS AND DISPLAY OUTPUT
            */

            //cost of total pizza
            var pizzaCost = 15+(1.25*toppings);

            //price each person has to pay
            var costPerPerson = pizzaCost/people;

            //round to 2 decimals
            var costPerPersonDisplay = costPerPerson.toFixed(2);

            //update the text in the span with id="cost"
            $("#cost").text(costPerPersonDisplay);

            //unhide the results div
            $(".output").show();
        }
    }
)