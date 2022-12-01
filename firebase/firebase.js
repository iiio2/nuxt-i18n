import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2yjrp_BUHDR3gh2oug9uiAzD_dfwA7yc",
  authDomain: "nuxt-i18n-8693a.firebaseapp.com",
  projectId: "nuxt-i18n-8693a",
  storageBucket: "nuxt-i18n-8693a.appspot.com",
  messagingSenderId: "532344414376",
  appId: "1:532344414376:web:ed35349c7b4b84e7b5629d",
  measurementId: "G-DNZ161ZNTT",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
