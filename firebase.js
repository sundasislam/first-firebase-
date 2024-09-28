
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import {getAuth , createUserWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBYLpkOvFQedx7ZoFtZIprtqPGlTzpIrTs",
    authDomain: "web-app-e513f.firebaseapp.com",
    projectId: "web-app-e513f",
    storageBucket: "web-app-e513f.appspot.com",
    messagingSenderId: "903044829276",
    appId: "1:903044829276:web:09abb20d860d267b5c9699"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {auth ,createUserWithEmailAndPassword}


  