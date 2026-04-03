
import DetailsLeft from "./DetailsLeft";
import DetailsRight from "./DetailsRight";
export default function Details() {
  return (
    <>
      <div className="container col-12 h-100 d-flex flex-row justify-content-center align-items-center gap-4 mt-5">
       
        <DetailsLeft />
    
     <DetailsRight />
        </div>
    </>
  );
}
