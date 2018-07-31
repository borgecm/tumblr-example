var Validate = (function () {
  
  var _validateEmail = function (email) {
    return email === "gEmail@gmail.com"
  };

  var _validatePassword = function (password) {
    return password === "gPass"
  };

  var logIn = function (email,pass) {
    if (_validateEmail(email)){
      if(_validatePassword(pass)){
        console.log("Logged in!")
        return true
      }else{
        return -1
      }
    }else{
      
      return -2
    }
      
  };
  
  return {
    logIn: logIn
  };

})();

function logIn(){
  var email = document.getElementById('email-input').value
  var password = document.getElementById('pass-input').value
  var log_result = Validate.logIn(email, password)
  var error_mesage = document.getElementById('error-message')

  if(log_result !== true){
    if(log_result === -1){
      console.log("Wrong pass")
      error_mesage.innerHTML = "Oops! Wrong password"
    }else if (log_result === -2){
      console.log("Wrong email")
      error_mesage.innerHTML = "Oops! Unknown email"
    }
    error_mesage.style.display = "block"
    return false
  }
  
}