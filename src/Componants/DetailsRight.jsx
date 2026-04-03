import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faStore, faShield } from "@fortawesome/free-solid-svg-icons";
export default function DetailsRight() {
    return (
        <>
         <div className="DetailsRight col-6 h-100 d-flex flex-column gap-5">
        <h1 className="fw-bold">Apple iPhone 14 Pro Max</h1>
        <div className="price d-flex gap-3 align-items-center">
            
        <h4 className="fw-bold">$1399</h4>
        <h5 className="text-decoration-line-through opacity-50">$1499</h5>
        </div>
        <p>
          Enhanced capabilities thanks toan enlarged display of 6.7 inchesand
          work without rechargingthroughout the day. Incredible photosas in
          weak, yesand in bright lightusing the new systemwith two cameras
        </p>
        <div className="groupAdd d-flex gap-3 col-12"> 

        <button className=" col-6 btn btn-light text-dark border-1 border-black p-3">Add To Wishlist</button>
        <button className="col-6 btn  btn-dark text-light  p-3">Add to Cart</button>
        </div>
         <div className="container py-4">
      <div className="row text-center">

        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="p-3 bg-light rounded d-flex align-items-center gap-3">
            <FontAwesomeIcon icon={faTruck} size="lg" />
            <div>
              <div>Free Delivery</div>
              <strong>1-2 day</strong>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="p-3 bg-light rounded d-flex align-items-center gap-3">
            <FontAwesomeIcon icon={faStore} size="lg" />
            <div>
              <div>In Stock</div>
              <strong>Today</strong>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="p-3 bg-light rounded d-flex align-items-center gap-3">
            <FontAwesomeIcon icon={faShield} size="lg" />
            <div>
              <div>Guaranteed</div>
              <strong>1 year</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  
      </div>
        </>
    )
}