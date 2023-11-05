import styles from './Banner.module.css'

function Banner({ promotion,onSetPromotion}) {
    const handleClick = () => {
        !promotion && onSetPromotion(true)
    }
    return (
        <div className={styles.banner}>
            <h1 style={{color:"whitesmoke"}}>Price drops</h1>
            <button  onClick={handleClick} style={{fontSize: "18px"}}>PROMOTION</button>
        </div>
    )
}

export default Banner
