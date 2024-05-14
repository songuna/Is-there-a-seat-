
import { initializeApp } from "./node_modules/firebase/firebase-app.js";
import {doc, getFirestore, getDoc} from "./node_modules/firebase/firebase-firestore-lite.js";

const firebaseConfig = {
    apiKey: "AIzaSyDsM8maQlW7uYayXTNInIOs_K-btqlVaV8",
    authDomain: "it-there-a-seat.firebaseapp.com",
    projectId: "it-there-a-seat",
    storageBucket: "it-there-a-seat.appspot.com",
    messagingSenderId: "541215738127",
    appId: "1:541215738127:web:1d0ee21cd3efa7b2ed567a",
    measurementId: "G-CG75TQNXBJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const checkAuth = async (id) => {
    const docRef = doc(db, 'auth', id);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        alert('해당 유저가 존재합니다.');
    } else {
        alert('잘못된 아이디 입니다.');
    }
}