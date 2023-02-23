function whosPaying(names) {

     var num = names.length;
     var numPay = Math.floor(Math.random() * num);
     var namePay = names[numPay];
     var message = namePay + " is going to buy lunch today!";
     return message;
 
    }