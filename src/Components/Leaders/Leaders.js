import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import Leader from "../Leader/Leader";

import "./Leaders.css";

const Leaders = () => {
   const [leaders, setLeaders] = useState([]);

   //loading JSON Data
   useEffect(() => {
      fetch("./topLeadData.JSON")
         .then((res) => res.json())
         .then((data) => setLeaders(data));
   }, []);

   const [cart, setCart] = useState([]);

   const handledToCart = (detail) => {
      detail.isAdded = true;
      const newCart = [...cart, detail];
      setCart(newCart);
   };
   //total cost
   const total = cart.reduce((previous, detail) => previous + detail.salary, 0);

   return (
      /* Passing data as a props */
      <div style={{ backgroundColor: "#eaeded" }}>
         <div className="row">
            <div className="col-md-8 my-5 ms-4">
               <div className="row">
                  {leaders.map((person) => (
                     <Leader
                        key={person.id}
                        person={person}
                        handledToCart={handledToCart}
                     ></Leader>
                  ))}
               </div>
            </div>
            <div className="col-md-3 my-5">
               {/* Total Member Added */}
               <h4>
                  {" "}
                  <FontAwesomeIcon icon={faUser} /> Members Added: {cart.length}{" "}
               </h4>
               {/* Total Cost */}
               <h4>Total Cost: ${total} </h4>
               {/* Showing individual info to the cart */}
               {cart.map((info) => (
                  <Cart key={info.id} info={info}></Cart>
               ))}
               <button className="btn btn-primary">Buy Now</button>
            </div>
         </div>
      </div>
   );
};

export default Leaders;
