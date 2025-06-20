import React from "react";
import CardProduct from "../ShopingCart/components/ShopingCartCard.jsx"; 
import Calmness from "../../assets/calmness.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      image: Calmness,
      name: "Calmness",
      price: 8.5,
      cost: 4.5,
      size: "8oz",
      category: "Vela | Classic",
      lastUpdated: "03/05/25",
      activo: true,
    },
    {
      id: 2,
      image: Calmness,
      name: "Relax",
      price: 6.0,
      cost: 3.0,
      size: "6oz",
      category: "Vela | Minimal",
      lastUpdated: "01/04/25",
      activo: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F3] px-6 py-20">
      <h1 className="text-3xl font-bold text-center mb-10">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            cost={product.cost}
            size={product.size}
            category={product.category}
            lastUpdated={product.lastUpdated}
            activo={product.activo}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
