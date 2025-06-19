import React from 'react';
import CardProducts from "../Products/components/CardProducts.jsx"

import Calmness from "../../assets/calmness.jpg";

const Products = () => {
  return (
    <div className="relative h-screen bg-[#F9F7F3] mx-12 mt-36">
      <div className="flex items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-4">
                    <CardProducts
                        image={Calmness}
                        name="Calmness"
                        price="$8.00 - $15.00"
                        cost="$4.50 - $7.00"
                        size="4oz - 8oz"
                        category="Vela | Classic"
                        lastUpdated="03/05/25"
                        activo={true} // 👉 verde
                    />

                    <CardProducts
                        image={Calmness}
                        name="Relax"
                        price="$6.00 - $12.00"
                        cost="$3.00 - $6.00"
                        size="2oz - 6oz"
                        category="Vela | Minimal"
                        lastUpdated="01/04/25"
                        activo={false} // 👉 gris
                    />
                </div>
      </div>
    </div>
  );
};

export default Products;
 
    
    