var Validate={logIn:function(n,o){return"gEmail@gmail.com"==n?"gPass"==o?(console.log("Logged in!"),!0):-1:-2}};function logIn(){var n=document.getElementById("email-input").value,o=document.getElementById("pass-input").value,e=Validate.logIn(n,o);return-1===e?(console.log("Wrong pass"),!1):-2===e?(console.log("Wrong email"),!1):void 0}