import { IProduct, IRecentSale } from "./others/interfaces";

export const products: IProduct[] = [
  {
    name: "Teclado Redragon K552",
    description: "Teclado mecánico compacto para gaming, retroiluminado LED rojo, switches Outemu Blue.",
    price: 49.99,
    status: true,
    category_id: 1,
    url_image: "https://sevenfiguarts.com.pe/wp-content/uploads/2023/01/Teclado-KUMARA-K552-white-Redragon-4.jpg",
  },
  {
    name: "Auriculares Logitech G733",
    description: "Auriculares inalámbricos para gaming con tecnología Lightspeed, compatible con PC y consolas.",
    price: 129.99,
    status: true,
    category_id: 2,
    url_image: "https://cyccomputer.pe/30446-large_default/audifono-logitech-g-g733-rgb-con-microfono-white-wireless-pn981-000882.jpg", 
  },
  {
    name: "Mouse Logitech G502",
    description: "Mouse gaming con sensor óptico HERO, 16000 DPI, 11 botones programables.",
    price: 79.99,
    status: true,
    category_id: 1,
    url_image: "https://www.impacto.com.pe/storage/products/1611332760910-005469-6.jpg", 
  },
  {
    name: "Monitor ASUS ROG Swift",
    description: "Monitor gaming de 27 pulgadas, resolución QHD, frecuencia de actualización de 165Hz.",
    price: 399.99,
    status: true,
    category_id: 3,
    url_image: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/555/PMP20000230357/imagen3-1.jpeg", 
  },
  {
    name: "Silla gaming GT Omega",
    description: "Silla ergonómica para gaming, respaldo reclinable, reposabrazos ajustables.",
    price: 229.99,
    status: true,
    category_id: 4,
    url_image: "https://m.media-amazon.com/images/I/612EYVk7VtL._AC_SL1500_.jpg", 
  },
  {
    name: "Tarjeta gráfica NVIDIA GeForce RTX 3080",
    description: "Tarjeta gráfica de última generación para gaming, 10GB GDDR6X, Ray Tracing.",
    price: 699.99,
    status: true,
    category_id: 5,
    url_image: "https://ezpc.pe/wp-content/uploads/2022/09/ROG-STRIX-RTX3080-O12G-EVA.jpg", 
  },
  {
    name: "Headset SteelSeries Arctis 7",
    description: "Auriculares inalámbricos para gaming, sonido DTS Headphone:X 2.0, micrófono ClearCast.",
    price: 149.99,
    status: true,
    category_id: 2,
    url_image: "https://images-na.ssl-images-amazon.com/images/I/71exY5PBroL._AC_UL600_SR600,600_.jpg", 
  },
  {
    name: "Mousepad Razer Goliathus",
    description: "Mousepad de tela extendido para gaming, superficie optimizada para precisión y control.",
    price: 29.99,
    status: true,
    category_id: 1,
    url_image: "https://www.impacto.com.pe/storage/products/1611267185RZ02-01070600-R3U2-1.jpg", 
  },
  {
    name: "Cámara Logitech C920",
    description: "Cámara web Full HD 1080p para streaming y videoconferencias, corrección automática de luz.",
    price: 79.99,
    status: true,
    category_id: 6,
    url_image: "https://images.versus.io/objects/logitech-c920.front.master.1627038265185.jpg", 
  },
  {
    name: "Consola PlayStation 5",
    description: "Consola de próxima generación para gaming, 4K Ultra HD, SSD ultrarrápido.",
    price: 499.99,
    status: true,
    category_id: 7,
    url_image: "https://home.ripley.com.pe/Attachment/WOP_5/2031331143423/2031331143423_2.jpg", 
  },
];



// utils/Data.js
export const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234
  }
];


export const recentSales: IRecentSale[] = [
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: 39.00,
    url_image: "https://vivolabs.es/wp-content/uploads/2022/03/perfil-hombre-vivo.png",
  },
  {
    name: "Sophia Johnson",
    email: "sophia.johnson@email.com",
    amount: 55.75,
    url_image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Daniel Smith",
    email: "daniel.smith@email.com",
    amount: 79.99,
    url_image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    name: "Olivia Williams",
    email: "olivia.williams@email.com",
    amount: 120.50,
    url_image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Ethan Brown",
    email: "ethan.brown@email.com",
    amount: 29.95,
    url_image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];
