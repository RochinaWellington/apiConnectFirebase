import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmN7eC2wj-m-AW994XKXpV8Iakcconnww",
  authDomain: "fir-prueba-47f46.firebaseapp.com",
  projectId: "fir-prueba-47f46",
  storageBucket: "fir-prueba-47f46.appspot.com",
  messagingSenderId: "552025277321",
  appId: "1:552025277321:web:33f52bfcd302f0183bd758"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports{
  db,
}