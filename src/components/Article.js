import { useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "../css/Article.module.css";
import wave from "../assets/wave.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";

import SocialLinks from "./SocialLinks";

const article = {
  title: "¿Qué es el IFAD?",
  img: "https://cemeri.org/wp-content/uploads/Sin-titulo.jpg",
  date: "Mayo 25, 2022",
  author: "Aida Jiménez Juárez",
  cites: [
    "[1] International Fund for Agricultural Development. (s. f.). About.",
    "[2] Ídem.",
    "[3] Ídem.",
    "[4] Ídem.",
    "[5] Ídem.",
    "[6] Ídem.",
    "[7] International Fund for Agricultural Development. (s. f.). Vision.",
    "[8] Ídem.",
    "[9] International Fund for Agricultural Development. (2016, abril). IFAD Strategic Framework 2016–2025 Enabling inclusive and sustainable rural transformation.",
    "[10] Ídem.",
    "[11] International Fund for Agricultural Development. (s. f.). Our approach. IFAD",
    "[12] Ídem.",
    "[13] Ídem.",
    "[14] Ídem.",
    "[15] Ídem.",
    "[16] Ídem.",
    "[17] International Fund for Agricultural Development. (s. f.). Topics. IFAD.",
    "[18] Ídem.",
    "[19] International Fund for Agricultural Development. (s. f.). Covid-19. IFAD.",
    "[20] International Fund for Agricultural Development. (s. f.). Climate and environment. IFAD.",
    "[21] International Fund for Agricultural Development. (s. f.). crops. IFAD.",
    "[22] International Fund for Agricultural Development. (s. f.). Fisheries and aquaculture. IFAD.",
    "[23] International Fund for Agricultural Development. (s. f.[24] International Fund for Agricultural Development. (s. f.). Indigenous peoples. IFAD.",
    "[25] International Fund for Agricultural Development. (s. f.). Institutions and organizations. IFAD.",
    "[26] International Fund for Agricultural Development. (s. f.). Land. IFAD.",
    "[27] International Fund for Agricultural Development. (s. f.). Livestock and rangeland. IFAD.",
  ],
  references: [
    "International Fund for Agricultural Development. (s. f.). About. IFAD. Recuperado 14 de mayo de 2022, de https://www.ifad.org/en/about",
    "International Fund for Agricultural Development. (s. f.). Climate and environment. IFAD. Recuperado 14 de mayo de 2022, de https://www.ifad.org/en/climate-and-environment",
    "International Fund for Agricultural Development. (s. f.). Covid-19. IFAD. Recuperado 14 de mayo de 2022, de https://www.ifad.org/en/covid19",
    "International Fund for Agricultural Development. (s. f.). crops. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/crops",
    "International Fund for Agricultural Development. (s. f.). Fisheries and aquaculture. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/fisheries",
    "International Fund for Agricultural Development. (s. f.). Gender. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/gender",
    "International Fund for Agricultural Development. (s. f.). Indigenous peoples. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/indigenous-peoples",
    "International Fund for Agricultural Development. (s. f.). Institutions and organisations. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/institutions-and-organizations",
    "International Fund for Agricultural Development. (s. f.). Land. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/land",
    "International Fund for Agricultural Development. (s. f.). Livestock and rangeland. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/livestock-and-rangeland",
    "International Fund for Agricultural Development. (s. f.). Our approach. IFAD. Recuperado 14 de mayo de 2022, de https://www.ifad.org/en/approach",
    "International Fund for Agricultural Development. (s. f.). Topics. IFAD. Recuperado 14 de mayo de 2022, de https://www.ifad.org/en/topics",
    "International Fund for Agricultural Development. (s. f.). Vision. IFAD. Recuperado 14 de mayo de 2022, de https://www.ifad.org/en/vision",
    "International Fund for Agricultural Development. (2016, abril). IFAD Strategic Framework 2016–2025 Enabling inclusive and sustainable rural transformation. IFAD. https://www.ifad.org/en/strategic-framework",
    "International Fund for Agricultural Development. (2018, 15 mayo). Performance-based Allocation System [Vídeo]. YouTube. https://www.youtube.com/watch?v=CaM8U1KWTIw&feature=youtu.be",
  ],
  content: `El Fondo Internacional de Desarrollo Agrícola (IFAD por sus siglas en inglés), es una institución financiera y organismo especializado de Naciones Unidas; su sede se encuentra en Roma, Italia, dentro del Centro para la Alimentación y la Agricultura de las Naciones Unidas. Desde su fundación en 1978 han proporcionado alrededor de 23,200 millones de dólares en subsidios y préstamos con bajo interés a proyectos que han ayudado aproximadamente a 518 millones de personas. [1]

  El IFAD invierte principalmente en la población rural, empoderándola para que aumente su seguridad alimentaria, mejore la nutrición de las familias y se incrementen sus ingresos. Este Fondo ayuda a crear resiliencia, ampliar negocios y a que tengan mayor autonomía. Tres cuartas partes de las personas más pobres del mundo viven en zonas rurales de países en desarrollo, la mayoría de estas dependen de la agricultura. [2]
  
  Según datos del IFAD [3], para 2030 es posible que el cambio climático, el aumento de la población y la volatilidad de los precios en los alimentos y energías, empujen a millones de personas en situaciones vulnerables a la pobreza y hambre extrema. Con una población mundial en aumento y que superará los 9.000 millones de personas para 2050 [4], una brecha cada vez mayor entre los ricos y pobres, y una competencia considerable  por los recursos; los problemas a los que se enfrenta la humanidad no pueden esperar.     
  
  El IFAD trabaja en los lugares donde la pobreza y el hambre son más profundas: en las regiones más remotas de los países en desarrollo y en situación de fragilidad, donde generalmente pocos organismos de desarrollo se adentran. Se ha enfocado en crear  un enfoque rentable, centrado en las personas y orientado a la colaboración que da resultados. La agricultura a pequeña escala es un elemento central de su modelo de desarrollo, que conecta a las mujeres y hombres en situación de pobreza de las zonas rurales con los mercados y servicios para que así tengan la oportunidad de cultivar más y a su vez, tener mayores ganancias. 
  
  La agricultura es un instrumento (comprobado) para la reducción de la pobreza; el crecimiento del PIB generado por la agricultura es más eficaz para reducir la pobreza. Por ejemplo, en África subsahariana, el crecimiento de la agricultura reduce la pobreza hasta 11 veces más rápido que el crecimiento de otros sectores [5]. Los proyectos apoyados por el IFAD han demostrado que, con acceso a la financiación, los mercados, la tecnología y la información, las poblaciones rurales pueden salir por sí mismas de la pobreza. [6] 
  
  Además de ayudar a las poblaciones rurales a crecer y generar más ingresos, el IFAD promueve la igualdad de género y la inclusión, ayuda a desarrollar la capacidad de organización de las comunidades locales y refuerza la resiliencia al cambio climático. 
  
  # Misión: Una transformación rural duradera
  La principal misión del IFAD es transformar las economías rurales y sus sistemas alimentarios con intención de hacerlos más inclusivos, productivos, resistentes y sostenibles [7]. Se busca invertir en las personas que corren más riesgo de quedarse rezagados: los pobres, los pequeños productores de alimentos, las mujeres, los jóvenes y otros grupos vulnerables que viven en las zonas rurales. 
  
  El IFAD es la única organización mundial de desarrollo especializada que se dedica exclusivamente a transformar la agricultura, las economías rurales y los sistemas alimentarios. Dirigen su apoyo con intención de llegar hasta las zonas más remotas, y así ayudar a millones de personas en las áreas rurales a:
  
  - Aumentar su productividad y acceder a los mercados; 
  - crear y conseguir nuevos puestos de trabajo que traigan consigo crecimiento económico rural;
  - aumentar su resiliencia frente a un clima en constante cambio y gestionar la base de recursos naturales de forma sostenible;
  - mejorar sus mecanismos de supervivencia en caso de encontrarse en entornos frágiles o conflictivos;
  - reforzar su voz, sus capacidades y organizaciones. [8]
  
  El IFAD canaliza las inversiones públicas y privadas, ayudando a fortalecer las políticas y promover la innovación, esto con el fin de conseguir beneficios sostenibles para las personas vulnerables en todos los países que lo requieran, y así lograr un cambio que sea duradero y sistémico. La organización trabaja con los gobiernos, el sector privado y la sociedad civil en conjunto para el desarrollo de las zonas rurales; juntos, utilizan herramientas e instrumentos para responder a los retos que afrontan los países con las necesidades más críticas.  
  
  # Estrategia: Fomentar el desarrollo rural sostenible
  El marco estratégico del IFAD 2016-2025 [9] establece la forma de trabajo durante la próxima década, y el papel a desempeñar en la transformación inclusiva y sostenible de las zonas rurales. En este se articula su contribución a la Agenda 2030, incluyendo la función (mejor detallada) que desempeñará el IFAD en el apoyo a los países para que cumplan sus propias metas en relación con la Agenda. 
  
  Este marco establece que se trabajará de forma “más grande, mejor y más inteligente” [10], quiere decir, más grande: movilizando y aprovechando la inversión considerablemente mayor en las zonas rurales; mejor: reforzando la calidad de los programas de desarrollo rural; más inteligente: afinando la eficiencia de estos y obteniendo resultados de una forma más rentable. 
  
  El marco establece tres objetivos: 
  
  - Aumentar la capacidad productiva de la población vulnerable de las zonas rurales;
  - aumentar los beneficios de su participación en el mercado;
  - reforzar la sostenibilidad medioambiental y la resistencia climática de sus actividades económicas. 
  
  # Capacitando a las personas para que dirijan su propio desarrollo 
  Durante 40 años, el IFAD ha trabajado directamente con las personas más pobres del mundo, y que viven en las regiones más remotas del planeta; en específico se busca ayudar a mujeres, jóvenes y pueblos indígenas que habitan en zonas rurales. Con su innovador trabajo de empoderamiento tratan de empoderar a las personas para que sean capaces de liderar su propio desarrollo y “realizar sus sueños”. [11]
  
  El enfoque comunitario del IFAD busca que millones de pequeños agricultores familiares de todo el mundo confíen en el Fondo [12]. Además, su amplia experiencia en la financiación de programas rentables y centrados en las personas los convierte en el socio preferido de los gobiernos, los organismos de desarrollo, el sector privado y las ONG comprometidas con la erradicación de la pobreza extrema. 
  
  El IFAD entiende que los habitantes de las zonas rurales son actores empresariales que saben lo que necesitan para tener éxito [13]: asegurar la tenencia de la tierra, el acceso a los mercados, el capital y los conocimientos, agua potable, carreteras y transporte fiable, herramientas y nuevas tecnologías, semillas y fertilizantes, y una buena gobernanza. Es por esto que los proyectos apoyados por el Fondo conectan a la población rural en situación de pobreza con los mercados y los servicios con los que puedan crecer y ganar más; estos proyectos transforman comunidades económica y socialmente, además de que promueven la igualdad de género y la inclusión.
  
  La ventaja comparativa del IFAD radica en que se dirige a los más pobres y a los pueblos que se encuentran en situaciones vulnerables, así como a aquellos que cuentan con  menores probabilidades de tener acceso a los activos y oportunidades debido a la exclusión social y la marginación. 
  
  Hasta la fecha, han recaudado alrededor de 26.100 millones de dólares y aportado otros 18.500 millones de dólares para la agricultura y el desarrollo rural [14]. Según cálculos del IFAD, sus inversiones reducen la pobreza entre un 5.6% y un 9.9% en comparación con el 3% y el 7% de los programas de transferencia de efectivo [15]. La cofinanciación de parte de sus socios, y los gobiernos potencias dichas inversiones. 
  
  El **Sistema de Asignación Basado en los Resultados** (PBAS) se basa en normas que utilizan una fórmula que incorpora medidas de las necesidades y los resultados de los países, de este modo, se pueden asignar los recursos de préstamos y donaciones del IFAD a los programas nacionales en función de los resultados del país y de las necesidades. [16] 
  
  # Atacar las raíces de la pobreza y el hambre
  
  Los programas y proyectos financiados por el IFAD ayudan a las personas a salir de la pobreza y a construir una vida mejor. Aunque su trabajo es “hacer la diferencia día a día” [17], también centran su atención a soluciones sostenibles que persisten a medio y largo plazo, para así lograr una verdadera transformación de las comunidades rurales; ofreciendo financiación, herramientas, conocimientos y esperanza. 
  
  A continuación, se menciona algunas de las principales áreas de trabajo [18]: 
  
  - **Respondiendo a la COVID-19**: El brote de COVID-19 se ha extendido rápidamente por todo el mundo, perturbando profundamente las actividades fundamentales que unen a la comunidad mundial, incluida la agricultura, y poniendo en peligro a todos los que dependen de ella. [19] 
  - **Clima y medio ambiente**: Los pequeños agricultores y la población rural pobre se llevan la peor parte del cambio climático y la degradación de los recursos naturales. Los fenómenos meteorológicos extremos, como lo son las sequías, las tormentas y las inundaciones, están ejerciendo presión sobre los ecosistemas de los que dependen de la agricultura. [20]
  - **Cultivos**: Los pequeños agricultores son los principales productores de alimentos a nivel mundial, según datos del IFAD, proporcionan entre el 60% y el 80% de los alimentos producidos en los países en desarrollo. A medida que la población mundial crece, estos agricultores se ven sometidos a una presión cada vez mayor para mejorar su productividad. [21]
  - **Pesca y acuicultura**: La pesca y la acuicultura son el sustento de casi 500 millones de personas en el mundo, sin embargo, muchas de estas pesquerías se encuentran en grave riesgo por culpa de la presión humana, como lo es la sobreexplotación, la contaminación y los cambios en los hábitats. [22]
  - **Género**: las mujeres contribuyen en gran medida a la agricultura y a las economías rurales, pero se enfrentan a numerosos retos que los hombres no sufren; las mujeres tienen menos acceso a los recursos y a servicios como la propiedad, la financiación, la formación, los insumos y el equipamiento. [23]  
  - **Pueblos Indígenas**: Se calcula que hay más de 476 millones de personas que se identifican como indígenas en unos 90 países del mundo, pero, con demasiada frecuencia, siguen siendo víctimas de discriminaciones y sus voces siguen sin ser escuchadas. [24]
  - **Instituciones y organizaciones**: La población rural pobre rara vez controla las condiciones que determinan sus medios de vida, dispersos geográficamente en áreas remotas, los pequeños productores carecen de las infraestructuras básicas (bancos, carreteras, suministro eléctrico, conexión a internet, etcétera) necesarias para manejar sus negocios. [25]
  - **Terrenos**: La competencia por las tierras nunca ha sido mayor; el mundo se enfrenta al aumento de la población, la rápida urbanización, el cambio climático, la disminución de la fertilidad del suelo y la creciente demanda de seguridad alimentaria y de combustibles. Todo esto ejerce presión sobre la tierra. [26]
  - **Ganados y pastizales**: El ganado contribuye a las operaciones agrícolas de más de 800 millones de pequeños productores pobres; los hogares rurales pueden mejorar sus medios de vida criando una gran variedad de animales. [27]

  IFAD actúa en forma para garantizar que nadie se quede atrás, centrándose en áreas como el género, la juventud y la nutrición; invirtiendo para garantizar la sostenibilidad, la resiliencia climática y el progreso económico inclusivo. Ayuda a las personas y a sus comunidades a alcanzar sus objetivos y transformar sus comunidades para bien. El IFAD busca terminar con la pobreza rural para 2030. `,
};

const nextArticle = {
  img: "https://cemeri.org/wp-content/uploads/que-es-la-doctrina-truman-cemeri-768x403.png",
  title: "¿Qué es la Doctrina Truman?",
  contentPreview: `La Doctrina Truman es una política de contención del presidente
      Truman en la que se establecía que los Estados Unidos deben brindar
      apoyo económico y militar a los países del mundo que lo requirieran
      para contener la expansión del comunismo.`,
  author: "Luis Salcedo",
};

const Article = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [hasSavedInfo, setHasSavedInfo] = useState(false);

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{article.title}</h1>
      <img
        className={styles.mainImage}
        src={article.img}
        alt={`Portada del artículo: ${article.title}`}
      />
      <div className={styles.intro}>
        <SocialLinks className={styles.social} />
        <p>{article.date}</p>
        <div>&nbsp;</div>
        <div />
      </div>
      <div className={styles.mainContent}>
        <ReactMarkdown
          children={article.content}
          className={styles.articleText}
        />

        <SocialLinks className={styles.social} />

        <details>
          <summary className={styles.summaryTitle}>Autor y Fuentes</summary>

          <p>Por {article.author}</p>

          {article.cites.map((cite, index) => (
            <p key={`${cite}-${index}`} className={styles.cite}>
              {cite}
            </p>
          ))}

          {article.references.length > 0 && (
            <p className={styles.referencesTitle}>Referencias</p>
          )}
          {article.references.map((reference, index) => (
            <p key={`${reference}-${index}`}>{reference}</p>
          ))}
        </details>

        <div className={styles.divider}></div>

        <div className={styles.extraActions}>
          <a href="#">
            <p>
              <FontAwesomeIcon icon={faPenNib} /> Contenido apegado a The Trust
              Project
            </p>
          </a>
          <a href="#">
            <p>
              <FontAwesomeIcon icon={faExclamationCircle} /> Reportar una errata
            </p>
          </a>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.nextArticle}>
        <img className={styles.waveOne} src={wave} />
        <div className={styles.waveFill} />
        <img className={styles.waveTwo} src={wave} />

        <div
          className={styles.nextArticleContent}
          onClick={() => (window.location = "#")}
        >
          <img className={styles.nextArticleImage} src={nextArticle.img} />
          <h3 className={styles.nextArticleTitle}>{nextArticle.title}</h3>
          <p className={styles.nextArticleText}>{nextArticle.contentPreview}</p>
          <div className={styles.divider}></div>
          <p className={styles.nextArticleAuthor}>{nextArticle.author}</p>
        </div>
      </div>

      <form
        className={styles.commentContainer}
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className={styles.commentContainerTitle}>Deja una respuesta</h2>
        <p className={styles.commentContainerHelp}>
          Tu dirección de correo electrónico no será publicada. Los campos
          obligatorios están marcados con *
        </p>
        <label htmlFor="comment">Comentario *</label>
        <textarea
          id="comment"
          name="comment"
          required
          rows="10"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <label htmlFor="name">Nombre *</label>
        <input
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Correo electrónico *</label>
        <input
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="website">Sitio web</label>
        <input
          id="website"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <div>
          <input
            type="checkbox"
            id="saveInfo"
            name="saveInfo"
            value={hasSavedInfo}
            onChange={(e) => setHasSavedInfo(e.target.checked)}
          />
          <label htmlFor="saveInfo">
            Guarda mi nombre, correo electrónico y web en este navegador para la
            próxima vez que comente.
          </label>
        </div>

        <input
          type="submit"
          value="Publicar el comentario"
          onClick={(e) => {
            e.preventDefault();
            console.log(
              `Name: ${name}\n Comment: ${comment}\nEmail: ${email}\nWebsite: ${website}\nSaved info: ${hasSavedInfo}`
            );
          }}
        />
      </form>
    </article>
  );
};

export default Article;
