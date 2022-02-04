"use strict";


/*

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

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
                createdDivs.classList.add("selected")

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

