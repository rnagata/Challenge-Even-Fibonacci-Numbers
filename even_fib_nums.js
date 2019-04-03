/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;

  // do your work here
  let fibonacciNumbers = [];
  let firstValue = 0;
  let secondValue = 1;
  let calcValue = firstValue + secondValue;

  fibonacciNumbers.push(firstValue);
  fibonacciNumbers.push(secondValue);
  
  while (calcValue <= maxFibValue){
    fibonacciNumbers.push(calcValue);
    firstValue = secondValue;
    secondValue = calcValue;
    calcValue = firstValue + secondValue;
  }

  fibonacciNumbers.forEach(function(element){
    if (element % 2 === 0){
      sum += element;
    }
  });
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;
  
  //define your base case, validate your input
  if (typeof maxFibValue === 'number'){
    //do your work here
    let fibonacciNumbers = [];
    let firstValue = 0;
    let secondValue = 1;
    let calcValue = firstValue + secondValue;

    fibonacciNumbers.push(firstValue);
    fibonacciNumbers.push(secondValue);

    while (calcValue <= maxFibValue){
      fibonacciNumbers.push(calcValue);
      firstValue = secondValue;
      secondValue = calcValue;
      calcValue = firstValue + secondValue;
    }

    fibonacciNumbers.forEach(function(element){
      if (element < maxFibValue){
        highest = element;
      }
    });
    return highest;
  }
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};