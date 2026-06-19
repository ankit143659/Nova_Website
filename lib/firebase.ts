import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, child, serverTimestamp, set } from "firebase/database";

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
export const db = getDatabase(app);

export const submitQuery = async (data: { name: string, email: string, phone: string, message: string, subject?: string, assistantType?: string }) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const userRefKey = data.phone.replace(/[^0-9]/g, '') + "_" + data.email.replace(/[\.\#\$\[\]]/g, '_');
    const userLimitsRef = ref(db, `rate_limits/${userRefKey}/${today}`);
    
    const snapshot = await get(userLimitsRef);
    let count = snapshot.exists() ? snapshot.val().count : 0;
    
    if (count >= 3) {
      return { success: false, error: "Daily limit exceeded. You can only submit 3 queries per day." };
    }
    
    // Add the query with query_solve key set to false
    const queriesRef = ref(db, 'queries');
    const newQueryRef = push(queriesRef);
    await set(newQueryRef, {
      ...data,
      query_solve: false,
      timestamp: serverTimestamp()
    });
    
    // Increment the limit count
    await set(userLimitsRef, {
      count: count + 1
    });

    return { success: true, id: newQueryRef.key };
  } catch (e: any) {
    console.error("Error adding document: ", e);
    return { success: false, error: e.message || "Failed to submit query" };
  }
};

