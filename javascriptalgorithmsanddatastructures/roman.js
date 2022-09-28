// roman converter

let inputRoman;
let num;
let roman;

let romanResult = document.getElementById('roman-result');

function romanizeCheck() {
    num = document.getElementById('input-roman').value;
    forPrint = num;
    if(num !== ''){
    var lookup = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    },
    roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    romanResult.innerHTML = `${forPrint} in roman is ${roman}`;
}else{
    romanResult.innerHTML = `Insert a number!`;
}
}

