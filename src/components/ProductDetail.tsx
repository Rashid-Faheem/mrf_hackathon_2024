
import Image from 'next/image';
import IProduct from '../types/product';

const ProductDetail = ({ product }: { product: IProduct }) => {
    return (
        <div className="min-h-screen bg-white text-black flex flex-col items-center p-4">
          <div className="max-w-6xl w-full p-6 flex flex-col md:flex-row gap-10">
            {/* Product Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={500} 
                height={500} 
                className="rounded-lg shadow-lg object-cover" 
              />
            </div>
    
            {/* Product Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="mt-4 text-gray-600">{product.status}</p>
              <p className="mt-4 text-gray-600">{product.description}</p>
              <p className="mt-4 text-2xl font-semibold">₹ {product.price}</p>
    
             
            </div>
          </div>
        </div>
      );
    }
    
  export default ProductDetail;