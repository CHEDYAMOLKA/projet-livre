
var users=[

  {email:"afliRayhan@gmail.com",password:"wxcvbn"}
]
localStorage.setItem("users",users)
function login(){
  email= document.getElementById('email').value;


  password= document.getElementById('password').value;
   var user = users.find((Element=>Element.password==password && Element.email==email));
   if (user){
     console.log(user)
    location.replace("../../index.html");
    localStorage.setItem("ConnectedUser",JSON.stringify(user))

   }else{
  alert("please password and email ineccorect")
   }
   document.getElementById('email').value="";
   document.getElementById('password').value="";
 }


