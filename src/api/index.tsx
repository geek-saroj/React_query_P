import { useQuery } from 'react-query';

// Function to fetch data using React Query
export function useData() {
  return useQuery('data', async () => {
    // Replace 'your-api-endpoint' with your actual API endpoint
    const response = await fetch('http://localhost:3000/api/getservice');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  });
}

// Adding types for the product data
interface Product {
  id: number;
  name: string;
  price: number;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://dummyjson.com/productss');
  const data = await response.json();
  return data.products;
}

export default fetchProducts;