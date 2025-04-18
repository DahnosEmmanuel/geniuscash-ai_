import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAr-e6LUMHgtir1wx6tM7K2W-pnj691RoA",
  authDomain: "geniuscash-ai.firebaseapp.com",
  projectId: "geniuscash-ai",
  storageBucket: "geniuscash-ai.firebasestorage.app",
  messagingSenderId: "81212590697",
  appId: "1:81212590697:web:43c0c01d239c4c076630f8",
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
