//1. Verbal questions
// What is the difference between a parameter and an argument?
// parameter is what goes into the function() upon declaration
// arguement is the code within the block

// Within a function, what is the difference between return and console.log?
// return is used to bring back the data used within the function
// console.log is used for development reasons to check the outputs of variables in that specific line of the code

// What are the implications of the ability of a function to return a value?
// if a function is able to return a value that can be used to rewrite previous declared variables it can either conflict with other
// scopes that variables are also used


// ///2. Palindrome again.
// function checkPalindrome(word) {
//     word = word.toLowerCase().replace(/[\W_]/g, '');
//     for(var i = 0, len = word.length - 1; i < len/2; i++) {
//       if(word[i] !== word[len-i]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(checkPalindrome("Radar"));
//   console.log(checkPalindrome("Borscht"));
///3. Digit Sum
function sumDigits(num) {
   ;
  }
  console.log(sumDigits(56));


//4 Pythagoras

// function calculateSide(side1,side2){
//     side3=0;
//     //a squared
//     num1=Math.pow(side1,2);
//     //b squared
//     num2=Math.pow(side2,2);
//     ///a square + b square= c sqaure
//     num3=num1+num2;
//     //sqaure root of c
//     side3=Math.sqrt(num3);
//     return side3;
// }

// console.log(calculateSide(80, 60));


///5 SumArray
var numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
    numbers.reduce(getSum, 0);
    return total + Math.round(num);
}
console.log(getSum)
////6 Prime
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;
  }
}

console.log(test_prime(37));