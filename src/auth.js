import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth"; //getauth trae la autenticacion del registro

import firebaseApp from "./firebaseconfig";

const auth = getAuth(firebaseApp);

export {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
};
