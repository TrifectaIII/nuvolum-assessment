export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

// async function to fetch product info
export async function fetchProducts() {
  
    const url = 'https://fakestoreapi.com/products?limit=5';

    return await (await fetch(url)).json() as Product[];

}
