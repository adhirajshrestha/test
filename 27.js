//use of else statement 
function elevation(num1){
    if(num1>7){
         result = "the bigger one ";
    }else{
        result = "the smaller one";
    }
    return result;


}
console.log (elevation(5))




// function number(num2){
//     if(num2 >= 15){
//         result = "it is the bigger one";
//     }else{
//         result = "it is the smaller one";

//     }
//     return result;
    
// }
// console.log(number(19))

//elseif for more than  two conditions 
function number(num2){
    if(num2 >= 15){
        result = "it is the bigger one";
    }else if (num2>=30){
        result = "it is greater than equals to";
    }
    else(num2>=50);
        result = "the number is greater than oe equal to 50";
    }
    return result;

console.log(number(80))