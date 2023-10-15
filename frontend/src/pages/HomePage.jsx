import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";


export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav/>
      <section >
        <h1>
          Start your Shopping at Mercadona
          <br />
         Online Shopping 
        </h1>
        <h2>
          Receive your order at home with the same quality and freshness
        </h2>
        <Link to="catalogue" className="cta">START YOUR SHOPPING NOW</Link>
      </section>
    </main>
  );
}
