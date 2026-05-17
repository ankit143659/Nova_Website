import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyD6gkH5ft7bPCAqsJtD8fQAJ_96NAoz3gg",
  authDomain: "hotelio-4ebc9.firebaseapp.com",
  databaseURL: "https://hotelio-4ebc9-default-rtdb.firebaseio.com",
  projectId: "hotelio-4ebc9",
  storageBucket: "hotelio-4ebc9.firebasestorage.app",
  messagingSenderId: "670092583330",
  appId: "1:670092583330:web:b038535ebb07c1d51152fb",
  measurementId: "G-HK9RM6LL9Y"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const submitQuery = async (data: { name: string, email: string, phone: string, message: string }) => {
  try {
    const docRef = await addDoc(collection(db, "queries"), {
      ...data,
      timestamp: new Date().toISOString()
    });
    return { success: true, id: docRef.id };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, error: e };
  }
};
