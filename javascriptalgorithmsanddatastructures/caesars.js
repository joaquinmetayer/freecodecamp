// caesars ciper

let inputCaesars;

let caesarsResult =  document.getElementById('caesars-result');

function rot13Check() {
  inputCaesars = document.getElementById('input-caesars').value;
  if(inputCaesars  !== ''){
    inputCaesars = inputCaesars.toUpperCase();
    inputCaesars = inputCaesars.replace(/[A-Z]/g, rot13Check);
    function rot13Check(correspondance) {
      const charCode = correspondance.charCodeAt();
      //A = 65, Z = 90
      return String.fromCharCode(
              ((charCode + 13) <= 90) ? charCode + 13
                                      : (charCode + 13) % 90 + 64
             );
    }
    caesarsResult.innerHTML = `Is ${inputCaesars}`;
  }else{
    caesarsResult.innerHTML = `Please insert a string!`;
  }
}