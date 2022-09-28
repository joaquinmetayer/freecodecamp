// number validator

let inputNumber;
let resultValidation;
let numberResult =  document.getElementById('number-result');

function numberCheck() {
    inputNumber = document.getElementById('input-number').value;
    const validPatterns = [
      // 555-555-5555
      /^\d{3}-\d{3}-\d{4}$/,
  
      // 1 555-555-5555
      /^1 \d{3}-\d{3}-\d{4}$/,
  
      // 1 (555) 555-5555
      /^1 \(\d{3}\) \d{3}-\d{4}$/,
  
      // 5555555555
      /^\d{10}$/,
  
      // (555)555-5555
      /^\(\d{3}\)\d{3}-\d{4}$/,
  
      // 1 555 555 5555
      /^1 \d{3} \d{3} \d{4}$/,
  
      // 1(555)555-5555
      /1\(\d{3}\)\d{3}-\d{4}/
    ];
    resultValidation = validPatterns.some((pattern) => pattern.test(inputNumber));
    if(resultValidation == true){
      numberResult.innerHTML = 'Its a phone number!'
    }else{
      numberResult.innerHTML = 'Its NOT a phone number!'
    }
}

