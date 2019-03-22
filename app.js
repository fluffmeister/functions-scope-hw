

//4 Pythagoras

function calculateSide(side1,side2){
    side3=0;
    //a squared
    num1=Math.pow(side1,2);
    //b squared
    num2=Math.pow(side2,2);
    ///a square + b square= c sqaure
    num3=num1+num2;
    //sqaure root of c
    side3=Math.sqrt(num3);
    return side3;
}

console.log(calculateSide(80, 60));