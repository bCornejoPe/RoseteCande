import React, { useState } from "react";

const CardProduct = ({
  image,
  name,
  price
}) => {
  const [cantidad, setCantidad] = useState(1);
  const [selectedSize, setSelectedSize] = useState("8oz");

  const aumentar = () => setCantidad(c => c + 1);
  const disminuir = () => setCantidad(c => (c > 1 ? c - 1 : 1));

  return (
    <div className="w-full max-w-md rounded-xl shadow-lg bg-[#fdf8f3] p-4 flex gap-4 items-start">
      {/* Imagen */}
      <img
        src={image}
        alt={`Imagen de ${name}`}
        className="w-40 h-40 object-cover rounded-md"
      />

      {/* Detalles del producto */}
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          <p className="text-lg font-semibold text-gray-800">${price}</p>
          <ul className="text-sm text-gray-500 mt-1 leading-tight">
            <li>*Caja de regalo</li>
            <li>*Tarjeta personalizada</li>
          </ul>
        </div>

        {/* Tamaños */}
        <div className="flex gap-2 mt-3">
          {["8oz", "16oz"].map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`px-3 py-1 rounded-full border text-sm ${
                selectedSize === s
                  ? "bg-black text-white"
                  : "border-gray-400 text-gray-600"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Selector de cantidad */}
        <div className="mt-4 flex items-center gap-4">
          <span className="font-medium text-sm text-gray-700">CANTIDAD</span>
          <div className="flex items-center gap-2">
            <button
              onClick={disminuir}
              className="w-8 h-8 rounded-full border text-xl leading-none text-gray-700"
            >
              –
            </button>
            <span className="w-6 text-center">{cantidad}</span>
            <button
              onClick={aumentar}
              className="w-8 h-8 rounded-full border text-xl leading-none text-gray-700"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
