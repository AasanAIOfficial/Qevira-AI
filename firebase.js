import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { GoogleGenAI } from "https://esm.run/@google/genai";
const firebaseConfig = {
  apiKey: "AIzaSyAUulx-T2-Crx3B6iTbBUSFkX7TeR4CTRY",
  authDomain: "qevira-ai.firebaseapp.com",
  projectId: "qevira-ai",
  storageBucket: "qevira-ai.firebasestorage.app",
  messagingSenderId: "123658483544",
  appId: "1:123658483544:web:c8ea77df216c90461b172d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const ai = new GoogleGenAI({ apiKey: firebaseConfig.apiKey });
export { auth };
