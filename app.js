import { auth , createUserWithEmailAndPassword} from "./firebase.js"
console.log("auth",auth);

let singup = () =>{
let email = document.getElementById("email");
let password = document.getElementById ("password");

createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => { 
    console.log("user" , res.user)
  })
  .catch((error) => {
    console.log("error", error.code)
  });}


  let singupBtn = document.getElementById("singupBtn");
  singupBtn.addEventListener ("click" , singup)