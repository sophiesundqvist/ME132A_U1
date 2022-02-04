"use strict";


/*

By now:
You should have a program that, when the user clicks on the button, creates
a CSS-grid of R rows and C columns and fills the grid with random numbers between 0 and 99.
The values of R and C come from the input fields.

When the user clicks on a number, that number becomes selected (if it were deselected) or 
deselected (if it were selected). In other words, by clicking on a number, the user toggles
the class "selected" for that number.


In this part of the exercise:
We will make sure that the results (selected, amount, sum and average) are updated
each time a number is selected or deselected.

*/



/*

The idea is to use the functions we created at the beginning (adder, averg) to
calculate the results. The problem is that we do not have an array with the
numbers that the user has selected.

You do not need to code, or understand, that function. I have included below the
function getArrayOfSelectedNumbers. That function will return an array (a reference to
an array) that contains all the numbers that the user has selected.

The function getArrayOfSelectedNumbers does the following:
  1)  Declares an empty array
  2)  Goes through all the numberDivs in the grid and fills the 
      array with the numbers that are selected. In other words,
      with the numbers whose numberDiv has the class className
  3)  Returns the array with all the numbers whose numberDiv has the class className

  NOTE that you need to set the argument className when you make the function call
*/





let valueColumn = document.querySelector("#inputCols").value;
let valueRow = document.querySelector ("#inputRows").value;


function gridMaker(gridContainer, C, R){
  
  gridContainer.style.display = "grid";
  gridContainer.style["grid-template-columns"] = `repeat(${C}, 1fr`;
  gridContainer.style["grid-template-rows"] = `repeat(${R}, 1fr`;
  
  gridContainer.innerHTML = ""

  document.querySelector("#selected span").innerHTML = ""; 
  document.querySelector("#amount span").innerHTML = 0;
  document.querySelector("#sum span").innerHTML = 0;
  document.querySelector("#average span").innerHTML = 0;
  
  for(let i = 0; i < C * R; i++){
    gridContainer.appendChild(createNumberDiv())
    
  }
};

// I Loopen kallar jag på nedan function. ger den ett nytt namn och placerar den under gridcontainer

// har skapat en function som skapara nya divar och lägger till en siffra mellan 0-99 i

function createNumberDiv (){
  let newDiv = document.createElement("div")
  newDiv.innerHTML= Math.floor(99 * Math.random())
  
  newDiv.addEventListener("click",function(){
    newDiv.classList.toggle("selected")
    
    updateResults("selected")
  })
  
  return newDiv
}


document.querySelector("button").addEventListener("click", function(){
  gridMaker(document.querySelector("#grid"), valueColumn, valueRow) 
})


function averg ( _array ) {
  let sum2 = adder(a1) / _array.length;
  return sum2;
 // in here you must use adder
}


function getArrayOfSelectedNumbers (className) {

  // This weird line creates an array with all the numberDivs that have the 
  // class className. Naturally, when you call this function, you will need 
  // to assign a value to className. What value should that be, do you think?
  // The reference to the array is stored in arrayElements
  let arrayElements = Array.from(document.querySelectorAll("." + className));

  // Create a new array and store its reference in arrayNumbers
  let arrayNumbers = [];

  // Iterate through all the elements in arrayElements.
  // For each numberDiv in arrayElements create a new element in arrayNumbers
  // with the numeric value of the random number.
  for (let i = 0; i < arrayElements.length; i++) {
    let numberAsString = arrayElements[i].innerHTML;
    let number = parseInt(numberAsString);
    arrayNumbers.push(number);
  }
  
  // Make the array of numbers available outside the function
  return arrayNumbers;
  
}




function updateResults (className){
  let result = getArrayOfSelectedNumbers(className)

 
  
  document.querySelector("#selected span").innerHTML = result ; 
  document.querySelector("#amount span").innerHTML = result.length;
  
  
  document.querySelector("#sum span").innerHTML = adder (result)
  
  document.querySelector("#average span").innerHTML = averg(result);
  
  return result
}

function adder (arrayNumbers) {
  let summ = 0;
  for (let i = 0 ; i < arrayNumbers.length ; i++){
    summ = summ + arrayNumbers[i]
  }
  return summ;
}


function averg (arrayNumbers ) {
  let sum2 = adder(arrayNumbers) / arrayNumbers.length;
  return sum2;
 // in here you must use adder
}

/*

For this part, we need an array with all the selected numbers.
The function above will help us with that.

Now, this array of numbers changes everytime the user selects or
deselects a number. There will be one more or one less number in the array.

The intuitive idea is perhaps to create an array and then to add or remove
numbers as the user selects or deselects a number. This is how we would do it "manually."

But it is much easier in this case to simply create a new array with all
the selected numbers each time the user selects or deselects a number.
So, every time the user selects or deselects a number, we will call getArrayOfSelectedNumbers()
to get an updated array of numbers.




You must code a function updateResults that accepts parameter (className) and updates
the results as required. The argument must be the class that selected numberDivs have.

TEST:
Select a few numbers form the grid.
Call the function updateResults from the console to see it it works. Don't forget
to use the correct argument when calling it.



Note that updating the results actually is changing the HTML-content of the <spans>.
Check index.html to see what I mean by "<spans>".
Hopefully you remember by now tha twe use innerHTML to update the HTML-content of an
HTML-element.



Let's look at each of the results:

SELECTED
This is a comma-separated list of all the currently selected numbers.
How can we transform an array into a comma-separated string?
Study how array.join() works:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Summary: It kind of transforms an array into a comma-separeated string...

VIDEO:  Record a video where you explain what happens on these lines:
        console.log( [1,3,4,10,0,1].join() );
        console.log( [1,3,4,10,0,1].join(" - ") );
        This video must be called joinExplanation.





AMOUNT
This simply states the number of currently selected numbers.
Since we have them in an array, it's easy to get their amount... do you
remember how can we know how many elements an array has? Check it out in previous lectures or exercises.




SUM
At the beginning of the exercise, we coded a function that
takes an array as argument and returns the sum of its elements (if they are numbers).
This is the time to use it!




AVERAGE
At the beginning of the exercise, we coded a function that
takes an array as argument and returns the average of its elements (if they are numbers).
This is the time to use it!
Note that the average is often a number with a lot of decimals. Use the function roundString
below to always show a number that has one decimal.


*/

function roundString(numberWithManyDecimals, decimals){
  // From: https://stackoverflow.com/a/12698296/2027283
  var rounded = Math.pow(10, decimals);
  return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(decimals);
}

