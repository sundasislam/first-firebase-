// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js"
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js&quot;

// Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBYLpkOvFQedx7ZoFtZIprtqPGlTzpIrTs",
  authDomain: "web-app-e513f.firebaseapp.com",
  projectId: "web-app-e513f",
  storageBucket: "web-app-e513f.appspot.com",
  messagingSenderId: "903044829276",
  appId: "1:903044829276:web:09abb20d860d267b5c9699"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Initialize Analytics
const auth = getAuth();

// Signup Function
function signup() {

  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('singupPassword').value;
  console.log("email", email);
  console.log("password", password);

  // Check if both fields are filled
  if (email === '' || password === '') {
    alert('Please fill out both email and password fields.');
    return;
  }

  // Optional: Add more password validation (e.g., length, special characters)
  if (password.length < 6) {
    alert('Password should be at least 6 characters long.');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log('User signed up:', user);
      alert('Sign up successful! Welcome, ' + user.email);
      window.location.pathname = 'signin.html'
    })
    .catch((error) => {
      // Handle sign-up errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);

      // Display a user-friendly error message
      alert('Error: ' + errorMessage);
    });
}











// Attach event listener to button
document.getElementById('signupButton')?.addEventListener('click', signup);

function signin() {
  alert("hi")
  const email = document.getElementById('signinEmail').value;
  const password = document.getElementById('signinPassword').value;

  // Check if both fields are filled
  if (email === '' || password === '') {
    alert('Please fill out both email and password fields.');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('Signed in successfully: ', user)
      alert('Logged in...')
      sessionStorage.setItem("user", user.email);
      window.location.pathname = './welcome.html'
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
    });
}

document.getElementById('singinButton')?.addEventListener('click', signin);


