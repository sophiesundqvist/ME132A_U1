'use strict'

// Program the complete Averager App here.
// Don't forget to include your CSS-file in the folder

// Include the link to your Github Repository here:
// Link:

// GLOBAL VARIABLES
// None allowed

// FUNCTION DECLARATIONS (in alphabetical order)

function createNumberDiv () {
  let newDiv = document.createElement('div')
  newDiv.innerHTML = Math.floor(99 * Math.random())

  newDiv.addEventListener('click', function () {
    newDiv.classList.toggle('selected')

    updateResults('selected')
  })

  return newDiv
}


function getArrayOfSelectedNumbers (className) {
  let arrayElements = Array.from(document.querySelectorAll('.' + className))

  let arrayNumbers = []

  for (let i = 0; i < arrayElements.length; i++) {
    let numberAsString = arrayElements[i].innerHTML
    let number = parseInt(numberAsString)
    arrayNumbers.push(number)
  }

  return arrayNumbers
}


function gridMaker (gridContainer, cols, rows) {
  gridContainer.style['grid-template-columns'] = `repeat(${cols}, 1fr`
  gridContainer.style['grid-template-rows'] = `repeat(${rows}, 1fr`

  gridContainer.innerHTML = ''

  for (let i = 0; i < cols * rows; i++) {
    gridContainer.appendChild(createNumberDiv())
  }
}


function roundString (input, digits) {
  var rounded = Math.pow(10, digits)
  return (Math.round(input * rounded) / rounded).toFixed(digits)
}


function selectedAverage (arrayNumbers) {
  let sumAverage = selectedSum(arrayNumbers) / arrayNumbers.length

  return sumAverage
}


function selectedSum (arrayNumbers) {
  let sum = 0

  for (let i = 0; i < arrayNumbers.length; i++) {
    sum = sum + arrayNumbers[i]
  }

  return sum
}


function updateResults (className) {
  let result = getArrayOfSelectedNumbers(className)

  document.querySelector('#selected span').innerHTML = result
  document.querySelector('#amount span').innerHTML = result.length
  document.querySelector('#sum span').innerHTML = selectedSum(result)
  document.querySelector('#average span').innerHTML = roundString(selectedAverage(result),1
  )

  return result
}

// EVENTLISTENERS FOR EXISTING HTML-ELEMENTS

document.querySelector('button').addEventListener('click', function () {
  gridMaker(
    document.querySelector('#grid'),
    document.querySelector('#inputCols').value,
    document.querySelector('#inputRows').value
  )
})

// DIRECT CODE
// Initialise the page directly, no need to wait for user to click first time.

document.querySelector('button').click()
