function isLeap(year) {
      
    if(year % 4 !== 0){
        var message = "Not leap year.";
    }else if(year % 100 === 0 && year % 400 !== 0){
        message = "Not leap year.";
    }else{
        message = "Leap year.";
    }
    
    return message;   
    
    }