import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, writeBatch } from "firebase/firestore";
// fakerjs
import { config } from "dotenv";
config();

const firebaseConfig = {
  apiKey: "AIzaSyB7m2RBEQiJfuNeXS-oHMPM0CNJ05BLpaw",
  authDomain: "ecommerce-react-89e6f.firebaseapp.com",
  projectId: "ecommerce-react-89e6f",
  storageBucket: "ecommerce-react-89e6f.firebasestorage.app",
  messagingSenderId: "1032303360973",
  appId: "1:1032303360973:web:63f5ac62900e557c596284",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const uploadData = async () => {
  try {
    // recurso que quiero migrar a firestore
    const url = "https://api.npoint.io/1a84a92e16e1e82ff626";

    const response = await fetch(url);
    const data = await response.json();

    // firestore
    const bacth = writeBatch(db);
    const mapCategories = {};
    // categorias
    const categoriesRef = collection(db, "categories");
    data.categories.forEach((cat) => {
      const nuevaCat = doc(categoriesRef);
      mapCategories[cat.id] = nuevaCat.id;
      bacth.set(nuevaCat, { name: cat.name });
    });

    const productsRef = collection(db, "products");
    data.products.forEach((prod) => {
      const { id, categoryId, ...productData } = prod;
      const nuevaCatId = mapCategories[categoryId];
      const nuevoProdref = doc(productsRef);
      bacth.set(nuevoProdref, { ...productData, categoryId: nuevaCatId });
    });

    await bacth.commit()
    console.log("La base de datos fue poblada con exito");
    
  } catch (error) {
    console.log(error);
  }
};
// EJECUTA BURRO
uploadData()