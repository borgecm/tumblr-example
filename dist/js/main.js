var Validate={logIn:function(e,n){return"gEmail@gmail.com"==e?"gPass"==n?(console.log("Logged in!"),!0):-1:-2}};function logIn(){var e=document.getElementById("email-input").value,n=document.getElementById("pass-input").value,o=Validate.logIn(e,n),l=document.getElementById("error-message");if(!0!==o)return-1===o?(console.log("Wrong pass"),l.innerHTML="Oops! Wrong password"):-2===o&&(console.log("Wrong email"),l.innerHTML="Oops! Unknown email"),!(l.style.display="block")}