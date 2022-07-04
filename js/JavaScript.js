function validateForm() {
    var password = document.forms["signupForm"]["password"].value;
    var confirmPassword = document.forms["signupForm"]["confirmPassword"].value;
    var username = document.forms["signupForm"]["username"].value;
    var flag=false;
    re=/[0-9]/
    if(re.test(username)){
      alert("user name must be not contain number!");
      document.forms["signupForm"]["username"].focus();
      return flag;
    }
      if (password!=confirmPassword) {
        alert("passwords does not match");
        document.forms["signupForm"]["confirmPassword"].focus();
        return flag;
      }
    
      if(password.length<8){
        alert("password must contain at least 8 characters");
        document.forms["signupForm"]["password"].focus();
        return flag;
      }
      
      if(!re.test(password)){
        alert("password must contain at least one numbers (0-9)!");
        document.forms["signupForm"]["password"].focus();
        return flag;
      }
    else{
        flag=true;
        alert("You successfully Sing UP");
        return flag;
     }
    };
function validateEdit(){
    var password = document.forms["EditForm"]["password"].value;
    var flag=false;  
        if(password.length<8){
          alert("password must contain at least 8 characters");
          document.forms["EditForm"]["password"].focus();
          return flag;
        }
        re=/[0-9]/
        if(!re.test(password)){
          alert("password must contain at least one numbers (0-9)!");
          document.forms["EditForm"]["password"].focus();
          return flag;
        }
        else{
            flag=true;
            alert("You successfully Edit Profile")

        }
    };