

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCIQNSYNwUZDC2SBsgCc3vaX0pbMHEakFA",
    authDomain: "practise-1-9f841.firebaseapp.com",
    databaseURL: "https://practise-1-9f841-default-rtdb.firebaseio.com",
    projectId: "practise-1-9f841",
    storageBucket: "practise-1-9f841.appspot.com",
    messagingSenderId: "614141033063",
    appId: "1:614141033063:web:614c0c69e3b96c25c572c2"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function add_user(){
user_name=document.getElementById("username").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding username"
});
}