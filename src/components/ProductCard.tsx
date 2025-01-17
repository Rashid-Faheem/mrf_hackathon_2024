
interface Product {
  image: string;
  name: string;
  price: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    return (
      <div className="border rounded-md p-4">
        <img src={product.image} alt={product.name} className="mb-4" />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;