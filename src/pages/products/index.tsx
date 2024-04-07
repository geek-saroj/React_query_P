import React from "react";
import { useQuery } from "react-query";
import fetchProducts from "../../api/index";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  message: string;
}

const Index: React.FC<Product[]> = () => {
  const { isLoading, error, data: products } = useQuery("products", fetchProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    // Custom error message
    const errorMessage = "Oops! Something went wrong. Please try again later.";
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products && products.map((product:any) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-4" />
          <div className="text-lg font-semibold mb-2">{product.title}</div>
          <div className="text-gray-500 mb-2">${product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Index;
