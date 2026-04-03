import OppoF19 from "../assets/OppoF19.png";
export default function RelatedProducts() {
  return (
    <>
      <div className="container mt-5 d-flex flex-column gap-4 ">
        <div className=" row mx-0 g-4 ">
        <h3>Related Products</h3>

          <div className=" col-3">
            <div
              className="  p-4  rounded text-center d-flex flex-column gap-3"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <img className="img-fluid" src={OppoF19} alt="Oppo F19" />
              <p>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
              <h6>$1437</h6>
              <button className="col-12 btn btn-dark text-light p-3">
                Add to Cart
              </button>
            </div>
          </div>
          <div className=" col-3">
            <div
              className="  p-4  rounded text-center d-flex flex-column gap-3"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <img lassName="img-fluid" src={OppoF19} alt="Oppo F19" />
              <p>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
              <h6>$1437</h6>
              <button className="col-12 btn btn-dark text-light p-3">
                Add to Cart
              </button>
            </div>
          </div>
          <div className=" col-3">
            <div
              className="  p-4  rounded text-center d-flex flex-column gap-3"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <img lassName="img-fluid" src={OppoF19} alt="Oppo F19" />
              <p>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
              <h6>$1437</h6>
              <button className="col-12 btn btn-dark text-light p-3">
                Add to Cart
              </button>
            </div>
          </div>
          <div className=" col-3">
            <div
              className="  p-4  rounded text-center d-flex flex-column gap-3"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              <img lassName="img-fluid" src={OppoF19} alt="Oppo F19" />
              <p>Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
              <h6>$1437</h6>
              <button className="col-12 btn btn-dark text-light p-3">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
