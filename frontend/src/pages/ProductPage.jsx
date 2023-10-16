import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductPage.module.css';
import PageNav from '../components/PageNav';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import { listProductDetails } from '../actions/productActions';


const URL = "http://127.0.0.1:8000"
function ProductPage() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const product = productDetails.products ;

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch, id])


console.log(product)

    return (
        <div>
            <PageNav/>
            <section className={styles.productPage}>
                <article className={styles.box}>
                        <div className={styles.container}>
                        <img className={styles.img} src={`${URL}/${product.image}`} alt={product.name}/>
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
