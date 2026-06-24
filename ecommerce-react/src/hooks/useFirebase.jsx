import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../services/firebaseConfig.js";

export const useProducts = (categoryId) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // los productos de la coleccion products
    const productsRef = collection(db, "products");

    // si categoryId entonces devuelvo prods de categoryId sino todos los products
    const consulta = categoryId
      ? query(productsRef, where("categoryId", "==", categoryId))
      : productsRef;
    // traer los docs de la coleccion
    getDocs(consulta).then((resp) => {
      const data = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setProducts(data);
    });
  }, [categoryId]);
  return { products };
};
export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // los productos de la coleccion products
    const categoriesRef = collection(db, "categories");

    // traer los docs de la coleccion
    getDocs(categoriesRef).then((resp) => {
      const data = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // console.log(data);
      setCategories(data);
    });
  }, []);
  return { categories };
};

// TODO: crear un Hook que traiga un solo documento product
// export const useProductById = (id) => {
//   // product
//   const [product, setProduct] = useState(null);

//   console.log(product);

//   useEffect(() => {
//     // busca un documento en la coleccion
//     const docRef = doc(db, "products", id);
//     console.log("Documeto prod:", docRef);

//     getDoc(docRef)
//       .then((resp) => {
//         if (resp.exists()) {
//           setProduct({ id: resp.id, ...resp.data() });
//         } else {
//           setProduct(null); // Producto no encontrado
//         }
//       })
//       .catch((error) => console.error("Error fetching product:", error));

    
//   }, [id]);
//   return { product };
// };
export const useProductById = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "products", id);

    getDoc(docRef)
      .then((resp) => {
        if (resp.exists()) {
          setProduct({ id: resp.id, ...resp.data() });
        } else {
          setProduct(null); // Producto no encontrado
        }
      })
      .catch((error) => console.error("Error fetching product:", error))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading };
};
