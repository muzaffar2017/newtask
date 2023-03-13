

  function validateForm(){
      var username = document.getElementById('usrname').value;
      var password = document.getElementById('pwd').value;
      if(username==""){
          document.getElementById('errorMsg').innerHTML = "Username cannot be empty";
          document.getElementById('errorMsg').style.visibility="visible";
          return false;
      }
      else if(username.length<5){
          document.getElementById('errorMsg').innerHTML = "Username cannot be too short";
          document.getElementById('errorMsg').style.visibility="visible";
          return false;
      }
      else if(password==""){
          document.getElementById('errorMsg').innerHTML = "Password cannot be empty";
          document.getElementById('errorMsg').style.visibility="visible";
          return false;
      }
      else if(password.length<5){
          document.getElementById('errorMsg').innerHTML = "Password cannot be too short";
          document.getElementById('errorMsg').style.visibility="visible";
          return false;
      }
      else{
          return true;
      }
  }


  function generateCaptcha(){
      var captcha = "";
      var key;
      var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
           'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
           'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
           't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      for(i=0;i<6;i++){
          key = Math.floor(letters.length*Math.random());
          captcha=captcha+letters[key];
      }
      document.getElementById('captcha').value = captcha;
  }
  function reloadCaptcha(){
      generateCaptcha();
  }
  generateCaptcha();
  setInterval(generateCaptcha,25000)

