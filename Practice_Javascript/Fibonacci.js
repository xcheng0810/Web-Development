function fibonacciGenerator (n) {

    var fibonacci = [];
      
    if(n === 1){
      fibonacci.push(0);
      return fibonacci;
    }else if(n === 2){
      fibonacci.push(0);
      fibonacci.push(1);
      return fibonacci;
    }else{
      fibonacci.push(0);
      fibonacci.push(1);
      for(var count = 2; count <= n - 1; count++){
        var fibonacci_next = fibonacci[count-1] + fibonacci[count-2];
        fibonacci.push(fibonacci_next);
      }
      return fibonacci;
    }     
        //Return an array of fibonacci numbers starting from 0.
    }