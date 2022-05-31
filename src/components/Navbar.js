import styles from "../css/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCaretDown,
  //   faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const linksArticulos = [
  { href: "#", title: "De análisis" },
  { href: "#", title: "De opinión" },
  { href: "#", title: "Digital Digest" },
  { href: "#", title: "Reseñas" },
];

const linksContenido = [
  { href: "#", title: "Mapas" },
  { href: "#", title: "Enciclopedia" },
  { href: "#", title: "Regiones" },
  { href: "#", title: "Temas" },
];

const linksCemeri = [
  {
    href: "#",
    title: "Acerca",
  },
  { href: "#", title: "Buscador académico" },
];

const linksContacto = [
  { href: "#", title: "Convocatorias" },
  { href: "#", title: "Redes sociales" },
];

const Dropdown = (props) => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>
        {`${props.title} `}
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
      <div className={styles.dropdownContent}>
        {props.links.map((link) => (
          <a href={link.href} key={link.title}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav>
      <header className={styles.header}>
        <div className={styles.leftCta}>
          <a href="#">
            <FontAwesomeIcon icon={faUser} /> Login
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Búsqueda
          </a>
        </div>

        <a href="#" className={styles.headerTitle}>
          CEMERI
        </a>

        <a href="#" className={styles.rightCta}>
          <FontAwesomeIcon icon={faEnvelope} /> Registrarse
        </a>
      </header>
      <div className={styles.navbar}>
        <Dropdown title="Artículos" links={linksArticulos} />
        <Dropdown title="Contenido" links={linksContenido} />
        <Dropdown title="CEMERI" links={linksCemeri} />
        <Dropdown title="Contacto" links={linksContacto} />
      </div>
    </nav>
  );
};

export default Navbar;
