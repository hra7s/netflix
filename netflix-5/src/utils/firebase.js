// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXubGt-Q79IYzNovfLhWR7nm5j2_-p6xU",
  authDomain: "prac-622df.firebaseapp.com",
  projectId: "prac-622df",
  storageBucket: "prac-622df.appspot.com",
  messagingSenderId: "135033497375",
  appId: "1:135033497375:web:ae7d418a4f60e05b23322a",
  measurementId: "G-EGNVJC62SJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();