
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCJfxIN8dBJ775_OxCHPyE3kMaCxCuBJj4",
      authDomain: "kwitter-34068.firebaseapp.com",
      projectId: "kwitter-34068",
      storageBucket: "kwitter-34068.appspot.com",
      messagingSenderId: "196673916122",
      appId: "1:196673916122:web:0f3f35893a32c2cd7229e3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
