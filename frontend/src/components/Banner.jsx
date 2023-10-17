import styles from './Banner.module.css'

function Banner() {
    return (
        <div className={styles.banner}>
            <h1 style={{color:"whitesmoke"}}>Price drops</h1>
            <button style={{fontSize: "12px"}}>check them out </button>
        </div>
    )
}

export default Banner
