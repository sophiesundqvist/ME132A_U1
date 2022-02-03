"use strict";

/*

By now, you whould have a JS-program that fills a grid of X columns and Y rows
with random numbers (a div for each) between 0 and 99.
The values of R and C come from the input fields.

Now we will add code so that we can select and deselect numbers
from the grid by clicking on them.

*/


/*

STEP 1
The first thing we need is a CSS-class called selected.
Add CSS-rules for .selected to the CSS-file. A change of 
background-color and color is enough but feel free!

*/


/*

STEP 2
Now you need to understand how elementRef.classList.toggle() works.
Check it out here:
https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
or here:
https://www.w3schools.com/howto/howto_js_toggle_class.asp

*/



/*

STEP 3
As mentioned above, the number will be selected / deselected when the user clicks on it.
Clearly, we need to add an eventListener to each of the numbers in the grid (or,
more correctly, to each of the divs in the grid). We've called them numberDivs.

The best way to do that is to add the eventListener when the numberDiv is created.
The numberDivs are created in the function createNumberDiv(), so that is where each numberDiv
must get its eventListener.

The only thing the eventListener needs to do (so far) is to toggle the class "selected" from
the classList.

*/





let valueColumn = document.querySelector("#inputCols").value;
let valueRow = document.querySelector ("#inputRows").value;


function gridMaker(gridContainer, C, R){
        
        gridContainer.style.display = "grid";
        gridContainer.style["grid-template-columns"] = `repeat(${C}, 1fr`;
        gridContainer.style["grid-template-rows"] = `repeat(${R}, 1fr`;
        
        for(let i = 0; i < C * R; i++){
                let createdDivs = createNumberDiv()
                gridContainer.appendChild(createdDivs)

                createdDivs.addEventListener("click",function(){
                    createdDivs.classList.toggle("selected")
                })
            }
        };
        
        // I Loopen kallar jag på nedan function. ger den ett nytt namn och placerar den under gridcontainer
        
        console.log(gridMaker(document.querySelector("#grid"), valueColumn, valueRow) )
        
        // har skapat en function som skapara nya divar och lägger till en siffra mellan 0-99 i
        
        function createNumberDiv (){
            let newDiv = document.createElement("div")
            newDiv.innerHTML= Math.floor(99 * Math.random())
    
        return newDiv
}

document.getElementsByClassName (".selected").addEventListener("click", function(){


})

