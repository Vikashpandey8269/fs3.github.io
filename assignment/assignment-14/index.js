function validation(){
 
  var password = document.getElementById("password").value;
 

  
  var passwordcheck = /^(?=.*d)(?=.*[a-zA-Z]).{8,20}$/;
  
  if (passwordcheck.test(password)) {
      document.getElementById("pass").innerHTML = "true";
    } else {
      document.getElementById("pass").innerHTML = "False";
      return false;
    }
    
   
}