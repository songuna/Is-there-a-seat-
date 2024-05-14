
import { initializeApp } from "./node_modules/firebase/firebase-app.js";
import {doc, getFirestore, getDoc} from "./node_modules/firebase/firebase-firestore-lite.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBr724_EH8Q3wf6tBOZWKjtd4EjlGYBtE",
  authDomain: "yunatest-40b9b.firebaseapp.com",
  projectId: "yunatest-40b9b",
  storageBucket: "yunatest-40b9b.appspot.com",
  messagingSenderId: "817612816418",
  appId: "1:817612816418:web:9afea016b636c6f7060a7b",
  measurementId: "G-5W2L2Z5J22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const db = getFirestore(app);
console.log(db);

export const checkAuth = async (id) => {
    const docRef = doc(db, 'auth', id);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        alert('해당 유저가 존재함.');
    }else{
        alert('잘못된 아이디입니다.');
    }
}