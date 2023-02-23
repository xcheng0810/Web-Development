var output = [];
var i = 1;

function fizzBuzz(){
    while(i<=10){
    if(i % 3 === 0){
        if(i % 5 === 0){
            output.push("FizzBuzz");
        }else{
            output.push("Fizz");
        }  
    }else if(i % 5 === 0){
        if(i % 3 === 0){
            output.push("FizzBuzz");
        }else{
            output.push("Buzz");
        } 
    }else{
        output.push(i);
    }
    i++;
    console.log(output);
    }
}

fizzBuzz();