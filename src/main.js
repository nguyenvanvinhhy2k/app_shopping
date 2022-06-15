import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyD9YDvaV9GxatP8o_pPa3JhoizC1MsNwuE",
//   authDomain: "app-shopping-9759c.firebaseapp.com",
//   projectId: "app-shopping-9759c",
//   storageBucket: "app-shopping-9759c.appspot.com",
//   messagingSenderId: "105410201541",
//   appId: "1:105410201541:web:6e27cfb4e3a47c1551adac",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export const commentsColRef = collection(db, "comments");
// export const favouritesColRef = collection(db, "favourites");

createApp(App).use(router).use(store).mount("#app");
