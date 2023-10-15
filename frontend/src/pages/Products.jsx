import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import styles from "./Products.module.css";
import Product from "../components/Product";
import Banner from "../components/Banner";


const URL = "http://127.0.0.1:8000"

export default function Products() {
  const [products, setProducts] = useState([]);  
   function useFetch() {
   
    useEffect(function(){
      async function fetchProducts(){
          try {
            const res = await fetch(`${URL}/api/products/`);
            if(!res.ok) throw new Error("Something went wrong");
            const data = await res.json();
            setProducts(data)
          }
          catch(err){
            console.log(err)
          }
      }
      fetchProducts()
    }, [])
    return products
  }
  useFetch()

  
  return (
    <main >
      <PageNav/>
      <Banner/>
      <section className={styles.products}>
        <div >
          <ul >
            {products.map((product) => {
              return <Product 
              name={product.name} 
              description = {product.description}
              price = {product.price}
              id ={product._id}
              image={product.image}
              key={product._id}               
              />
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
