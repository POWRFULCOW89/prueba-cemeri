import styles from "../css/Footer.module.css";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerSection}>
        <div className={styles.footerSectionColumn}>
          <a>
            <h1>CEMERI</h1>
          </a>
          <p>
            Comprometidos con la verdad y el desafío que ella conlleva. Nuestra
            meta es develar al mundo para una mejor toma de decisiones.{" "}
          </p>
        </div>
        <SocialLinks className={styles.social} />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.footerSection}>
        <p>Todos los derechos reservados © CEMERI 2019 -2021</p>
        <div className={styles.footerLinks}>
          <a href="#">Contacto</a>
          <a href="#">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
