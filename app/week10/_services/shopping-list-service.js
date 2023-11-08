import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
export async function getShoppingList(userId) {
    const itemsArray = [];
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);
    const querySnapshot = await getDocs(q);
  
    querySnapshot.forEach((doc) => {
      itemsArray.push({ id: doc.id, ...doc.data() });
    });
  
    return itemsArray;
  }
  
  // Function to add an item to a specific user's list in Firestore
  export async function addItem(userId, item) {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
  
    return docRef.id;
  }