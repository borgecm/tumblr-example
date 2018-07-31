var Validate = (function () {
  
  var _validateEmail = function (email) {
    if(email == "gEmail"){
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

      }else{
        console.log("Wrong email")
      }
    }else{
      console.log("Wrong pass")
    }
      
  };
  
  return {
    logIn: logIn
  };

})();