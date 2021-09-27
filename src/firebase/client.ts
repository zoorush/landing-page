// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBotI6K20qNNnESbsri7i29fUi6pefi0KM",
    authDomain: "zoorush-e8351.firebaseapp.com",
    projectId: "zoorush-e8351",
    storageBucket: "zoorush-e8351.appspot.com",
    messagingSenderId: "1093738086768",
    appId: "1:1093738086768:web:f09f1ca8f980899911cfb5",
    measurementId: "G-2G1LE218V7"
};

if (!getApps().length) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}
