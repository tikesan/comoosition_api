import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBx16MvEdFZlR8SNuOddNxPpH2CcsyMXAU",
    authDomain: "vue-blog-system-a29cd.firebaseapp.com",
    projectId: "vue-blog-system-a29cd",
    storageBucket: "vue-blog-system-a29cd.appspot.com",
    messagingSenderId: "1081775550051",
    appId: "1:1081775550051:web:c8a46745db8a829f1b1256"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db};