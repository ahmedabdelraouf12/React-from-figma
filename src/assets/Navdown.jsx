import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Navdown() {
  return (
    <nav>
      <div className="d-flex gap-3 bg-black" style={{ padding: "0px 144px 160px 144px" }}>
        <FontAwesomeIcon icon={faTwitter} className="text-white fs-5" />
        <FontAwesomeIcon icon={faFacebookF} className="text-white fs-5" />
        <FontAwesomeIcon icon={faTiktok} className="text-white fs-5" />
        <FontAwesomeIcon icon={faInstagram} className="text-white fs-5" />
      </div>
    </nav>
  );
}
