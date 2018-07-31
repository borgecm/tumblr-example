var Validate = (function () {
  
  var _validateEmail = function (email) {
    if(email == "gEmail@gmail.com"){
      return true
    }else{
      return false
    }
  };

  var _validatePassword = function (password) {
    if(password == "gPass"){
      return true
    }else{
      return false
    }
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
  if(log_result === -1){
    console.log("Wrong pass")
    return false
  }else if (log_result === -2){
    console.log("Wrong email")
    return false
  }
}