import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCoaUWxhc6DF_hgh2VXU9Urhzn1WmJGFrg",
  authDomain: "grocery-ecommerce-c1750.firebaseapp.com",
  projectId: "grocery-ecommerce-c1750",
  storageBucket: "grocery-ecommerce-c1750.appspot.com",
  messagingSenderId: "917096575814",
  appId: "1:917096575814:web:2120f7c54860d747106b47"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}