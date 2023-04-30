function myFunction(){
    var y = document.getElementById("passw");

    if(y.type === "password"){
        y.type = "text";

    }
    else{
        y.type = "password";

    }
}
function validate(){
    var password = document.getElementById("passw");
    var length = document.getElementById("lengths");

    if(password.value.length <= 6){
        alert('Login Successfull');
        window.open('AdminPage.html','_parent')
        return false;
    }
    else{
        alert('Login Failed');
    }
}

function myfunction(){
    var a = document.getElementById("pswd");

    if(a.type === "password"){
        a.type = "text";

    }
    else{
        a.type = "password";

    }
}
function validate(){
    var password = document.getElementById("pswd");
    var length = document.getElementById("length");

    if(password.value.length >= 6){
        alert('Login Successfull');
        window.open('UserPage.html','_parent')
        return false;
    }
    else{
        alert('Login Failed');
    }
}