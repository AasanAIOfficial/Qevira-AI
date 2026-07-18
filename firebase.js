// Firebase SDK Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAUulx-T2-Crx3B6iTbBUSFkX7TeR4CTRY",
  authDomain: "qevira-ai.firebaseapp.com",
  projectId: "qevira-ai",
  storageBucket: "qevira-ai.firebasestorage.app",
  messagingSenderId: "123658483544",
  appId: "1:123658483544:web:c8ea77df216c90461b172d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Export Auth
export { auth };
