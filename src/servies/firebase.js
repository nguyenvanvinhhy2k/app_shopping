import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD9YDvaV9GxatP8o_pPa3JhoizC1MsNwuE",
  authDomain: "app-shopping-9759c.firebaseapp.com",
  projectId: "app-shopping-9759c",
  storageBucket: "app-shopping-9759c.appspot.com",
  messagingSenderId: "105410201541",
  appId: "1:105410201541:web:6e27cfb4e3a47c1551adac",
  databaseURL:
  "https://app-shopping-9759c-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);
export { database, ref, push, onValue };
export const commentsColRef = collection(db, "comments");
export const favouritesColRef = collection(db, "favourites");
