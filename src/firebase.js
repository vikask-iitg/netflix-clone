import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyCnKKGj6DwbQ1v-IDtt7ydFwOPEU2-OMvg",
    authDomain: "netflix-clone-4a1ca.firebaseapp.com",
    projectId: "netflix-clone-4a1ca",
    storageBucket: "netflix-clone-4a1ca.firebasestorage.app",
    messagingSenderId: "1020909395397",
    appId: "1:1020909395397:web:04216d4139603b5bc8ffac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// User Sign Up Function
const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' ').replace(/\b\w/g, c => c.toUpperCase()));
    }
}

// User SLog In Function
const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' ').replace(/\b\w/g, c => c.toUpperCase()));
    }
}

// User Log Out Function
const logout = () => {
    signOut(auth);
}

export { auth, db, login, signup, logout };