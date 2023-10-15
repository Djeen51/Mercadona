import { Link } from 'react-router-dom'
import styles from './Product.module.css'



function Product({name, description,price, id, image}) {


    return (
        <li className={styles.product}>
            <Link to={`${id}`} >
                <article>
                    <div className={styles.card} >
                         <div className={styles.container}>
                             <img src={image} alt={name}/>
                         </div>
                         <div>
                             <h3>{name}</h3>
                         </div>
                         <div className={styles.description}>
                            <p>{description}</p>
                         </div>
                    </div>
                    <section>
                        <h3>{price} €</h3>
                     </section>

                </article>
            </Link>
        </li>
    )
}

export default Product
