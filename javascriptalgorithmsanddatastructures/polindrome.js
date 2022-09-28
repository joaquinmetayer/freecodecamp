// polindrome

let inputPalindrome;

let poliResult = document.getElementById('poli-result');

function palindromeCheck(){
    inputPalindrome = document.getElementById('input-polindrome').value;
    if(palindrome(inputPalindrome) == true){
        poliResult.innerHTML = 'a Polidrome!'
    }else if(palindrome(inputPalindrome) == false){
        poliResult.innerHTML = 'NOT a Polidrome!'
    }
}


function palindrome(str) {
    if(str !== ''){
        let alphanumericOnly = str;
        // 1) Lowercase the input
        alphanumericOnly = alphanumericOnly.toLowerCase()
        // 2) Strip out non-alphanumeric characters
        alphanumericOnly = alphanumericOnly.match(/[a-z0-9]/g);
        // 3) return string === reversedString
        return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('');
    }else{
        poliResult.innerHTML = 'mmm enter a input!'
    }
}

