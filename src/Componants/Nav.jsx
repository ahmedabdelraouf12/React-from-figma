import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCoffee, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import logo from "../assets/Logo.svg";
export default function Nav () {
    return (
         <nav className="container d-flex justify-content-between align-items-center p-3 bg-white " >
        <img src={logo} alt="Logo" />
        <input type="text" className=" col-3 p-2 border rounded" placeholder="Search" />
        <ul className="d-flex list-unstyled mb-0 gap-5">
          <li>
            <a className="text-decoration-none text-dark fw-bold" href="/">Home</a>
          </li>
          <li>
            <a className="text-decoration-none text-dark"     href="/about">About</a>
          </li>
          <li>
            <a className="text-decoration-none text-dark"     href="/contact">Contact Us</a>
          </li>
          <li>
            <a className="text-decoration-none text-dark" href="/Blog">Blog</a>
          </li>
        </ul>

        <div className=" d-flex gap-3">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </nav>
    )
}