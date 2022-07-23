import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import dotenv from 'dotenv'
const dotEnv=dotenv.config()
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
console.log(process.env.apiKey)
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain:process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getContacts = async (req, res) => {
  const citiesCol = collection(db, 'contacts');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  res.json(cityList)
}

