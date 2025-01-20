
import Image from 'next/image';
import IProduct from '../types/product';

const ProductCard = ({ product }: { product: IProduct }) => {
 
  

    return (
      <div className="border rounded-md shadow px-2 pt-2 pb-1">
        <Image src={product.image} alt={product.name} className="mb-4" />
           <div className="p-4">
           <p className="text-red-500 font-semibold text-sm">{product.status}</p>
           <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
           <p className="text-gray-600 text-sm">{product.category}</p>
           
           <p className="text-gray-600 text-sm">{product.colorCount && product.colorCount > 1 ? `${product.colorCount} Colors` : `${product.colorCount} Color`} </p>
           <div className="flex gap-2 mt-2 justify-between">

           <p className="text-gray-900 font-bold mt-2">MRP: $ {product.price}</p>
           <div>

           
            
           </div>
              </div>
         </div>
      </div>
    );
  };
  
  export default ProductCard;