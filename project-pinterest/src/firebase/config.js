
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKrWj_qVFODyoUNo3HKxw_J9A3VbZ7FQY",
  authDomain: "proyect-pinteres-1.firebaseapp.com",
  projectId: "proyect-pinteres-1",
  storageBucket: "proyect-pinteres-1.appspot.com",
  messagingSenderId: "199965858879",
  appId: "1:199965858879:web:59e1eeba43d1ee9f97ac8a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 