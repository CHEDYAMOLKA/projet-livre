user = JSON.parse(localStorage.getItem("connect"))||[];

console.log(user);

function register() {
    //get values form  the form the inputs//
   name = document.getElementById('name').value;

    email = document.getElementById('email').value;

    password = document.getElementById('password').value;
    Retype_password = document.getElementById('Retype_password').value;

    if (name!=''&& email!=''&& password!=''&& Retype_password!=''&&password==Retype_password) {
       user.push({
           name:name,
            email:email,
            password:password,
            Retype_password:Retype_password

        })
location.replace('file:///C:/Users/DELL/Desktop/project%20JS/pages/examples/login.html');
        localStorage.setItem("connect", JSON.stringify(user));
        document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('Retype_password').value = "";
    }

}


