// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBtxbe5OiESRmYU4mMeeg-o-uxBEbpYQxk",
      authDomain: "kwitter1-10bba.firebaseapp.com",
      databaseURL: "https://kwitter1-10bba-default-rtdb.firebaseio.com",
      projectId: "kwitter1-10bba",
      storageBucket: "kwitter1-10bba.appspot.com",
      messagingSenderId: "521796167249",
      appId: "1:521796167249:web:d93aac8fc6cf1a0a12ba70"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var x = localStorage.getItem("User name");
document.getElementById("user_name").innerHTML = " Welcome " + x + " 🎇🎇🎇";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name" + Room_names);
       var a = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += a;
      });
      });
}
getData();

function addRoom() {
      if (document.getElementById("room_name").value == "") {
            document.getElementById("Warn2").innerHTML = "Please don't enter any type of symbols and please don't keep the input empty <sub>👇🏽👇🏽👇🏽</sub>";
      }

      else {
            var x = document.getElementById("room_name").value;
            firebase.database().ref("/").child(x).update({
              purpose: "Adding room"
            });
            localStorage.setItem("Room name" , x);
            window.location = "kindex.html";
      }
}

function log_Out() {
      localStorage.removeItem("Room name");
      localStorage.removeItem("User name");
      window.location = "index.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kindex.html";
}