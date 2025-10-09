export const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "apple",
    price: 1299,
    stock: 15,
    description:
      "El iPhone 15 Pro Max cuenta con titanio de calidad aeroespacial, pantalla Super Retina XDR de 6.7 pulgadas, chip A17 Pro y sistema de cámaras avanzado.",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop",
    specs: {
      screen: '6.7" Super Retina XDR',
      processor: "A17 Pro",
      ram: "8GB",
      storage: "256GB",
      camera: "48MP + 12MP + 12MP",
      battery: "4422 mAh",
    },
  },
  {
    id: 2,
    name: "iPhone 14",
    brand: "Apple",
    category: "apple",
    price: 799,
    stock: 25,
    description:
      "iPhone 14 con pantalla Super Retina XDR de 6.1 pulgadas, chip A15 Bionic y sistema de cámara dual avanzado.",
    image:
      "https://images.unsplash.com/photo-1678652078473-82f0e2df1e16?w=500&h=500&fit=crop",
    specs: {
      screen: '6.1" Super Retina XDR',
      processor: "A15 Bionic",
      ram: "6GB",
      storage: "128GB",
      camera: "12MP + 12MP",
      battery: "3279 mAh",
    },
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "samsung",
    price: 1199,
    stock: 20,
    description:
      "Samsung Galaxy S24 Ultra con pantalla Dynamic AMOLED 2X de 6.8 pulgadas, procesador Snapdragon 8 Gen 3 y S Pen integrado.",
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop",
    specs: {
      screen: '6.8" Dynamic AMOLED 2X',
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      camera: "200MP + 50MP + 12MP + 10MP",
      battery: "5000 mAh",
    },
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    category: "samsung",
    price: 799,
    stock: 30,
    description:
      "Galaxy S23 con pantalla Dynamic AMOLED 2X de 6.1 pulgadas y procesador Snapdragon 8 Gen 2.",
    image:
      "https://images.unsplash.com/photo-1686244270741-e24a3e574e7d?w=500&h=500&fit=crop",
    specs: {
      screen: '6.1" Dynamic AMOLED 2X',
      processor: "Snapdragon 8 Gen 2",
      ram: "8GB",
      storage: "128GB",
      camera: "50MP + 12MP + 10MP",
      battery: "3900 mAh",
    },
  },
  {
    id: 5,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "google",
    price: 999,
    stock: 18,
    description:
      "Pixel 8 Pro con Google Tensor G3, pantalla LTPO OLED de 6.7 pulgadas y las mejores capacidades de IA en fotografía.",
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    specs: {
      screen: '6.7" LTPO OLED',
      processor: "Google Tensor G3",
      ram: "12GB",
      storage: "128GB",
      camera: "50MP + 48MP + 48MP",
      battery: "5050 mAh",
    },
  },
  {
    id: 6,
    name: "Google Pixel 7a",
    brand: "Google",
    category: "google",
    price: 499,
    stock: 35,
    description:
      "Pixel 7a ofrece experiencia premium a precio accesible con Google Tensor G2 y excelente cámara.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    specs: {
      screen: '6.1" OLED',
      processor: "Google Tensor G2",
      ram: "8GB",
      storage: "128GB",
      camera: "64MP + 13MP",
      battery: "4385 mAh",
    },
  },
  {
    id: 7,
    name: "Xiaomi 13 Pro",
    brand: "Xiaomi",
    category: "xiaomi",
    price: 899,
    stock: 22,
    description:
      "Xiaomi 13 Pro con cámaras Leica, Snapdragon 8 Gen 2 y pantalla AMOLED de 6.73 pulgadas.",
    image:
      "https://images.unsplash.com/photo-1592286927505-b0c2dc503f49?w=500&h=500&fit=crop",
    specs: {
      screen: '6.73" AMOLED',
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "256GB",
      camera: "50MP + 50MP + 50MP",
      battery: "4820 mAh",
    },
  },
  {
    id: 8,
    name: "Xiaomi Redmi Note 13 Pro",
    brand: "Xiaomi",
    category: "xiaomi",
    price: 349,
    stock: 45,
    description:
      "Redmi Note 13 Pro con excelente relación calidad-precio, pantalla AMOLED de 120Hz y batería de larga duración.",
    image:
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500&h=500&fit=crop",
    specs: {
      screen: '6.67" AMOLED',
      processor: "Snapdragon 7s Gen 2",
      ram: "8GB",
      storage: "256GB",
      camera: "200MP + 8MP + 2MP",
      battery: "5000 mAh",
    },
  },
  {
    id: 9,
    name: "OnePlus 12",
    brand: "OnePlus",
    category: "oneplus",
    price: 799,
    stock: 15,
    description:
      "OnePlus 12 con pantalla ProXDR de 6.82 pulgadas, Snapdragon 8 Gen 3 y carga rápida de 100W.",
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&h=500&fit=crop",
    specs: {
      screen: '6.82" ProXDR',
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      camera: "50MP + 48MP + 32MP",
      battery: "5400 mAh",
    },
  },
  {
    id: 10,
    name: "Motorola Edge 40 Pro",
    brand: "Motorola",
    category: "motorola",
    price: 699,
    stock: 28,
    description:
      "Motorola Edge 40 Pro con pantalla OLED curva de 6.67 pulgadas, Snapdragon 8 Gen 2 y experiencia Android pura.",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=500&fit=crop",
    specs: {
      screen: '6.67" pOLED',
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "256GB",
      camera: "50MP + 50MP + 12MP",
      battery: "4600 mAh",
    },
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      resolve(filteredProducts);
    }, 1500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === parseInt(id));
      resolve(product);
    }, 1000);
  });
};
