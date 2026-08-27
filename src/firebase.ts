import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUgC79YqJiGipLVgMjR4rIoVXJ0B7nqZQ",
  authDomain: "ayurhveda.firebaseapp.com",
  projectId: "ayurhveda",
  storageBucket: "ayurhveda.firebasestorage.app",
  messagingSenderId: "770062639168",
  appId: "1:770062639168:web:8c68f895d7b60c17cc3fa5",
  measurementId: "G-H821QJTZ61"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

