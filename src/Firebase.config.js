// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKZM2hDvixR7MXrODZ1YXe1cyRRgPHPwY",
  authDomain: "cheatchat-fefb4.firebaseapp.com",
  projectId: "cheatchat-fefb4",
  storageBucket: "cheatchat-fefb4.appspot.com",
  messagingSenderId: "735150447680",
  appId: "1:735150447680:web:c4eaea248298724cdc93a5",
  measurementId: "G-SE3TQ6XBQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig