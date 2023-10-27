import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBoO485FvRROrIIRsQbdqS5AELmMVkCEuk",
  authDomain: "curso-66206.firebaseapp.com",
  projectId: "curso-66206",
  storageBucket: "curso-66206.appspot.com",
  messagingSenderId: "571884020504",
  appId: "1:571884020504:web:3d5fbd5db37101c7a4346d",
  measurementId: "G-GZPT935QGD"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth };
