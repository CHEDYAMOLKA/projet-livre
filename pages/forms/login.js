users = JSON.parse(localStorage.getItem("Users"))||[];
connectedUser= JSON.parse(localStorage.getItem('ConnectedUser'))
//console.log(users);
//console.log(connectedUser);

function login(){
  email= document.getElementById('email').value;


  password= document.getElementById('password').value;
   var user = users.find((Element=>Element.password==password && Element.email==email));
   if (user){
     console.log(user)
    location.replace("../index.html");
    localStorage.setItem("ConnectedUser",JSON.stringify(user))

  document.getElementById('email').value="";
  document.getElementById('password').value="";

   }else{
    // location.reload("./login.js");
   }

 }


