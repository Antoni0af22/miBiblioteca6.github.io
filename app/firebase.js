import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
const firebaseConfig = {
  apiKey: "AIzaSyAmWyD3GoMybfrr93Fu35bmKX9xgNikjoQ",
  authDomain: "mibliblioteca6.firebaseapp.com",
  projectId: "mibliblioteca6",
  storageBucket: "mibliblioteca6.appspot.com",
  messagingSenderId: "561002201224",
  appId: "1:561002201224:web:590174f6a6fbae85b4df3d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
