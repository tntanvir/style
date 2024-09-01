import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBFftiL2akYLBzy2Hbfn0nqDj0QT01Yycc",
    authDomain: "style-swap-f3778.firebaseapp.com",
    projectId: "style-swap-f3778",
    storageBucket: "style-swap-f3778.appspot.com",
    messagingSenderId: "276723587943",
    appId: "1:276723587943:web:db3e114196223c6e14adc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;