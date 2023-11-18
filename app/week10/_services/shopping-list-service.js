import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../_utils/firebase"; // Update this path as per your project structure

// Function to retrieve all items for a specific user
async function getItems(userId) {
    const itemsArray = [];
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);

    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            itemsArray.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error("Error fetching items:", error);
        // Optionally throw the error to be handled where the function is called
        throw error;
    }

    return itemsArray;
}

// Function to add a new item to a specific user's list
async function addItem(userId, item) {
    const itemsRef = collection(db, "users", userId, "items");

    try {
        const docRef = await addDoc(itemsRef, item);
        return docRef.id; // Returns the ID of the newly created document
    } catch (error) {
        console.error("Error adding new item:", error);
        // Optionally throw the error to be handled where the function is called
        throw error;
    }
}

export { addItem, getItems };