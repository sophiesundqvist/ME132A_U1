"use strict";


/*

We will continue with our work from 4b.
We need to fix these two things:


First:
gridMaker must be called each time the user clicks on the button (See index.html).


Second:
We now need to make sure that when we call (anropar) gridMaker we must use
the values in #inputRows and #inputColumns as arguments.

*/

let button = document.querySelector("button");

button.addEventListener("click", function(){
    let valueColumn = document.querySelector("#inputCols").value;
    let valueRow = document.querySelector("#inputRows").value;
    gridMaker( document.querySelector("#grid"), valueColumn, valueRow )

    console.log(valueColumn, valueRow)
});

function gridMaker(gridContainer, C, R){

    gridContainer.style.display = "grid";
    gridContainer.style["grid-template-columns"] = `repeat(${C}, 1fr`;
    gridContainer.style["grid-template-rows"] = `repeat(${R}, 1fr`;
};


