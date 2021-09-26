import { CloseButton } from "react-bootstrap";
import "./Cart.css";
/* Showing individual Detail into the cart while clicking on a member */
const Cart = (props) => {
   const { name, img, role } = props.info;

   return (
      <div>
         <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
               <div className="col-md-4">
                  <img
                     src={img}
                     className="img-fluid rounded-start"
                     alt="..."
                  />
               </div>
               <div className="col-md-8">
                  <div className="card-body">
                     <h6 className="fw-light">
                        Name: {name}{" "}
                        <span>
                           {" "}
                           <CloseButton />
                        </span>{" "}
                     </h6>
                     <p className="fw-light"> Role: {role} </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
