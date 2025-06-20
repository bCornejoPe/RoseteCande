const CardProduct = ({
    image,
    name,
    price,
    cost,
    size,
    category,
    lastUpdated,
    activo // <- campo booleano
}) => {
    return (
      

         
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4 flex flex-col items-center gap-4">
              <img
                        src={image}
                        alt={`Imagen de ${name}`}
                        className="w-full h-32 object-cover rounded-sm"
                    />
              <div className="text-center">
                <h2 className="text-xl font-semibold">Calmness</h2>
                <p className="text-gray-600 text-sm">Vela | Classic</p>
                <div
                        className={`text-white text-xs text-center px-2 py-1 rounded mt-2
                            ${activo ? "bg-green-900" : "bg-gray-400"}
                        `}
                    >
                        {size}
                    </div>
                <p className="text-lg font-medium">{price}</p>
                <p className="text-sm text-gray-600">Costo: {cost}</p>
                <div className="flex justify-around text-sm text-gray-700 px-1">
                <span>{category}</span>
                <span>Últ: {lastUpdated}</span>
            </div>
              </div>
            <button
                className="mt-3 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
                onClick={() => alert('Agregado al carrito')}
              >
            Agregar al carrito
              </button>
            </div>
          );
                 
     

};

export default CardProduct;
