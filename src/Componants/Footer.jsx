import LogoVector from "../assets/LogoVector.svg";
import Navdown from "../assets/Navdown";
export default function Footer() {
  return (
    <>
      <footer className=" bg-black text-light col-12 d-flex flex-row justify-content-between    gap-4 mt-5 h-100" style={{ padding: "160px 144px 0px 144px" }}>
        <div className="left col-4 d-flex flex-column gap-5 h-100 ">
          <img src={LogoVector} className="col-2" alt="Logo" />
          <p className="fw-light">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than.
          </p>
        </div>
        <div className="center col-4 d-flex flex-column gap-3">
          <ul className=" d-flex flex-column  list-unstyled mb-0 gap-5">
            <li>
              <a className="text-decoration-none text-light fw-bold" href="/">
                Services
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-light fw-light" href="/">
                Gift cards
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-light fw-light" href="/">
                Gift cards
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-light fw-light" href="/">
                Service contracts{" "}
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-light fw-light" href="/">
                Bonus program{" "}
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-light fw-light" href="/">
                Non-cash account
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-light fw-light" href="/">
                Payment{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="Right col-4 d-flex flex-column gap-3">
          <ul className=" d-flex flex-column  list-unstyled mb-0 gap-5">
            <li>
              <a className="text-decoration-none text-light fw-bold" href="/">
                Assistance to the buyer
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-light fw-light" href="/">
                Find an order{" "}
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-light fw-light" href="/">
                Terms of delivery{" "}
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-light fw-light" href="/">
                Exchange and return of goods{" "}
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-light fw-light " href="/"> 
                Guarantee{" "}
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-light fw-light    " href="/">
                Frequently asked questions{" "}
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-light fw-light" href="/">
                Terms of use of the site
              </a>{" "}
            </li>
          </ul>
        </div>
      </footer>
      <Navdown />
    </>
  );
}
