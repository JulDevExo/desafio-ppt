import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Reemplaza con tus credenciales de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAEJrL0JlOu1BqFWNg24A6j62UmtWZnco0",
  authDomain: "desafio-ppt-online-6dfc6.firebaseapp.com",
  databaseURL: "https://desafio-ppt-online-6dfc6-default-rtdb.firebaseio.com",
  projectId: "desafio-ppt-online-6dfc6",
  storageBucket: "desafio-ppt-online-6dfc6.firebasestorage.app",
  messagingSenderId: "484183729956",
  appId: "1:484183729956:web:fe489caa2fd02d2389b5b1",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar database para usar en la app
export const database = getDatabase(app);
