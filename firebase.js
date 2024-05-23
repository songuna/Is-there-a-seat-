import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { doc, getFirestore, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'


const firebaseConfig = {
    apiKey: "AIzaSyDsM8maQlW7uYayXTNInIOs_K-btqlVaV8",
    authDomain: "it-there-a-seat.firebaseapp.com",
    projectId: "it-there-a-seat",
    storageBucket: "it-there-a-seat.appspot.com",
    messagingSenderId: "541215738127",
    appId: "1:541215738127:web:1d0ee21cd3efa7b2ed567a",
    measurementId: "G-CG75TQNXBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const checkAuth = async (email) => {
    const docRef = doc(db, 'auth', email);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        alert('로그인에 성공하였습니다.');
         window.location.href = 'http://local.isthereasit.com:5500/pcroomlist.html';
    }else{
        alert('잘못된 아이디입니다.');
    }
}

export const addAuth = async (name, email, pw) => {
    const docRef = doc(db, 'auth', email);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        alert('이미 존재하는 이메일입니다. 다른 이메일을 입력해주세요.')
    }else{
        const newDocRef = doc(db, 'auth', email);
        await setDoc(newDocRef, {name, email, pw});
        alert('회원가입에 성공하였습니다. 다시 로그인');
    }
}