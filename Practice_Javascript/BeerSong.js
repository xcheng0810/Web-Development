var count = 99;

function BeerSong(){
    while(count >= 1){
        var n = count - 1;
        if(count >= 3){
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take 1 down, pass it around, " + n + " bottles of beer on the wall.");
        }else if(count === 2){
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take 1 down, pass it around, " + n + " bottle of beer on the wall.");
        }else{
            console.log(count + " bottle of beer on the wall, " + count + " bottle of beer. Take 1 down, pass it around, " + n + " bottle of beer on the wall.");
        }
        count--;
    }
}

BeerSong();