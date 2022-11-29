import {initializeApp} from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-0UzhzoONCHxxLOGVI0YA-WwUav9gwEU",
    authDomain: "usertestingapp-b26e1.firebaseapp.com",
    projectId: "usertestingapp-b26e1",
    storageBucket: "usertestingapp-b26e1.appspot.com",
    messagingSenderId: "997760017089",
    appId: "1:997760017089:web:b2625a16c2bf7644b76a40",
    measurementId: "G-NR9FH0078T"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);