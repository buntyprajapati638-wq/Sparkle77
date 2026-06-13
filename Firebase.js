// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDwJUjRXQBZ4ND-JOyweoz-eeYph1A71j4",
  authDomain: "sparktek7-store.firebaseapp.com",
  projectId: "sparktek7-store",
  storageBucket: "sparktek7-store.firebasestorage.app",
  messagingSenderId: "780805451619",
  appId: "1:780805451619:web:3799b538e6a8b7862e6d56",
  measurementId: "G-QS0QFPKS22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Product Save
window.saveProductToFirebase = async function(product) {
  try {
    await addDoc(collection(db, "products"), product);
    console.log("Product saved");
  } catch (err) {
    console.error(err);
  }
};

// Product Load
window.loadProductsFromFirebase = async function() {
  try {
    const snapshot = await getDocs(collection(db, "products"));
    const data = [];

    snapshot.forEach((docSnap) => {
      data.push({
        firebaseId: docSnap.id,
        ...docSnap.data()
      });
    });

    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Product Delete
window.deleteProductFromFirebase = async function(id) {
  try {
    await deleteDoc(doc(db, "products", id));
  } catch (err) {
    console.error(err);
  }
};

console.log("Firebase Connected Successfully");
