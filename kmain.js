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

function BBB() {
    var c = localStorage.getItem("Room name");
    document.getElementById("room").innerHTML = "Welcome to room : " + c + " ✨✨✨";
}

user_name = localStorage.getItem("User name");
room_name = localStorage.getItem("Room name");

function send()
{
msg = document.getElementById("message").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("message").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot)
{ document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

       console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
       like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

       row = name_with_tag + message_with_tag +like_button + span_with_tag;       
       document.getElementById("output").innerHTML += row;
  } });  }); }
getData();

var count = 0;

function updateLike(message_id) {
    if (count == 0) {
        console.log("Clicked on like button - " + message_id);
        button_id = message_id;
        likes = document.getElementById(button_id).value;
        updated_likes = Number(likes) + 1;

        console.log(updated_likes);

        count = count + 1;

        firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes  
        });
    }
    
    else {
        console.log("Re-clicked on like button - " + message_id);
        button_id = message_id;
        likes = document.getElementById(button_id).value;
        updated_likes = Number(likes) - 1;

        console.log(updated_likes);

        count = count - 1;

        firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes  
        });
    }
}

function logOut() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("jindex.html");
}