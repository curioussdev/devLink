import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBD6Wen4jRA1IAjLtw_VVb6e-8Sp8ARTmM",
  authDomain: "devlinks-d6254.firebaseapp.com",
  projectId: "devlinks-d6254",
  storageBucket: "devlinks-d6254.appspot.com",
  messagingSenderId: "18773999948",
  appId: "1:18773999948:web:64070a4f4012bd37c58fe9",
  measurementId: "G-EV458EXHS3"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


export { db, auth};

