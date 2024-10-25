import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyHbAdBVKPytIbcXkf92JtnH10IP4olEM",
    authDomain: "auth-production-ce1a6.firebaseapp.com",
    projectId: "auth-production-ce1a6",
    storageBucket: "auth-production-ce1a6.appspot.com",
    messagingSenderId: "48133767887",
    appId: "1:48133767887:web:8d1fea09bd58c42b41adba"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);