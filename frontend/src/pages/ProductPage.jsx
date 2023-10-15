import { useState, useEffect } from 'react';
import styles from './ProductPage.module.css';
import PageNav from '../components/PageNav';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';


const URL = "http://127.0.0.1:8000"
function ProductPage() {
    const [product, setProduct] = useState([]);  
    const {id} = useParams();
    
   function useFetch() {
   
    useEffect(function(){
      async function fetchProducts(){
          try {
            const res = await fetch(`${URL}/api/products/${id}`);
            if(!res.ok) throw new Error("Something went wrong");
            const data = await res.json();
            setProduct(data)
          }
          catch(err){
            console.log(err)
          }
      }
      fetchProducts()
    }, [])
    return product
  }
  useFetch()
    return (
        <div>
            <PageNav/>
            <section className={styles.productPage}>
                <article className={styles.box}>
                        <div className={styles.container}>
                        <img className={styles.img} src={`http://127.0.0.1:8000/${product.image}`} alt={product.name}/>
                        </div>
                        <div className={styles.card}>
                            <h3>{product.name}</h3>
                            <h3>{product.price} €</h3>
                            <Button className={styles.button}>
                              <div >
                                  <div>Add to Cart</div>
                                  <div>
                                  <img className={styles.cart} src='/add-to-cart.png'></img>
                                  </div>
                              </div>
                            </Button>
                        </div>
                </article>

                <div className={styles.descriptionBloc}>
                  <h1>DESCRIPTION</h1>
                  <br/>
                  <h2>{product.description}</h2>
                </div>
            </section>
        </div>
    )
}

export default ProductPage
