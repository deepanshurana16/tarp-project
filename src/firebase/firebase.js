import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3dtSaJcggbB_CAcHSV9Pv4CGx5NTV2ww",
  authDomain: "hostel-application-299aa.firebaseapp.com",
  projectId: "hostel-application-299aa",
  storageBucket: "hostel-application-299aa.appspot.com",
  messagingSenderId: "1011102947796",
  appId: "1:1011102947796:web:a56b4f8b91087013d6de41",
  measurementId: "G-Z8BT48VR42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth };