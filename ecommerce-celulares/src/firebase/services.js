import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./config";

export const getProducts = async () => {
  try {
    const productsCollection = collection(db, "products");
    const snapshot = await getDocs(productsCollection);

    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return products;
  } catch (error) {
    console.error("❌ Error al obtener productos:", error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryId) => {
  try {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("category", "==", categoryId));
    const snapshot = await getDocs(q);

    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return products;
  } catch (error) {
    console.error("❌ Error al obtener productos por categoría:", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const productDoc = doc(db, "products", productId);
    const snapshot = await getDoc(productDoc);

    if (snapshot.exists()) {
      const product = {
        id: snapshot.id,
        ...snapshot.data(),
      };

      return product;
    } else {
      console.warn("⚠️ Producto no encontrado");
      return null;
    }
  } catch (error) {
    console.error("❌ Error al obtener producto:", error);
    throw error;
  }
};

export const createOrder = async (orderData) => {
  try {
    console.log("🛒 Creando orden de compra...");

    const order = {
      buyer: {
        name: orderData.buyer.name,
        phone: orderData.buyer.phone,
        email: orderData.buyer.email,
      },
      items: orderData.items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: orderData.total,
      date: serverTimestamp(),
      status: "generada",
    };

    const ordersCollection = collection(db, "orders");
    const docRef = await addDoc(ordersCollection, order);

    console.log(`✅ Orden creada con ID: ${docRef.id}`);
    return docRef.id;
  } catch (error) {
    console.error("❌ Error al crear orden:", error);
    throw error;
  }
};
