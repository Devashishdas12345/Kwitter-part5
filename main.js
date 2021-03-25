function addUser() {
    if (document.getElementById("user").value == "") {
        document.getElementById("Warn").innerHTML = "Please enter the user name in the text input given below";
    }
    
    else {
        document.getElementById("Warn").innerHTML = "";
        var user_name = document.getElementById("user").value;
        localStorage.setItem("User name" , user_name);
        window.location = "jindex.html";
        document.getElementById("user").innerHTML = "";
    }
}