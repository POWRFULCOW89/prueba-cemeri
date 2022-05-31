import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = (props) => {
  return (
    <div className={props.className}>
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTwitter} />
      </a>{" "}
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>{" "}
    </div>
  );
};

export default SocialLinks;
