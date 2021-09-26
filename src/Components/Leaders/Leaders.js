import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Leader from "../Leader/Leader";

import "./Leaders.css";

const Leaders = () => {
   const [leaders, setLeaders] = useState([]);

   useEffect(() => {
      fetch("./topLeadData.JSON")
         .then((res) => res.json())
         .then((data) => setLeaders(data));
   }, []);

   const [cart, setCart] = useState([]);

   const handledToCart = (detail) => {
      const newCart = [...cart, detail];
      setCart(newCart);
   };
   //total cost
   const total = cart.reduce((previous, detail) => previous + detail.salary, 0);

   return (
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
               <h4>Members Added: {cart.length} </h4>
               <h4>Total Cost: ${total} </h4>
               {cart.map((info) => (
                  <Cart info={info}></Cart>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Leaders;
