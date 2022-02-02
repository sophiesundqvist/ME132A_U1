"use strict";


/*

We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".

You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?


VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer

*/

let valueColumn = document.querySelector("#inputCols").value;
let valueRow = document.querySelector ("#inputRows").value;

function gridMaker(gridContainer, C, R){

        gridContainer.style.display = "grid";
        gridContainer.style["grid-template-columns"] = `repeat(${C}, 1fr`;
        gridContainer.style["grid-template-rows"] = `repeat(${R}, 1fr`;

        for(let i = 0; i < C * R; i++){
                let newDiv = document.createElement("div")
                gridContainer.appendChild(newDiv)
        }
    };

console.log(gridMaker(document.querySelector("#grid"), valueColumn, valueRow) )
