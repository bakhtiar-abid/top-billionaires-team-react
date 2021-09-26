import React from "react";
import "./Cart.css";

const Cart = (props) => {
   const { img, name, age, residence, role, netWorth, salary, otherAssets } =
      props.info;

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
                     <h5 className="">Name: {name} </h5>
                     <p className="card-text">
                        <span className="fw-bolder">Role: </span> {role}
                     </p>
                     <p className="card-text">
                        <span className="fw-bolder">Age:</span> {age}
                     </p>
                     <p className="card-text">
                        <span className="fw-bolder">Residence:</span>{" "}
                        {residence}
                     </p>
                     <p className="card-text">
                        <span className="fw-bolder">Net Worth:</span> {netWorth}
                     </p>
                     <p className="card-text">
                        <span className="fw-bolder">Salary: </span> ${salary}
                     </p>
                     <p className="card-text">
                        <span className="fw-bolder">Other Assets: </span>
                        {otherAssets?.asset1}, {otherAssets?.asset2}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
