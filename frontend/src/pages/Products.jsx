import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageNav from "../components/PageNav";
import styles from "./Products.module.css";
import Product from "../components/Product";
import Banner from "../components/Banner";
import { listProducts } from "../actions/productActions";




export default function Products() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList);
    const {products} = productList;

    useEffect(() =>{
      dispatch(listProducts())
    }, [dispatch] )

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
