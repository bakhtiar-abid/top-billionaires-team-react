import React, { useEffect, useState } from "react";
import Leader from "../Leader/Leader";

import "./Leaders.css";

const Leaders = () => {
   const [leaders, setLeaders] = useState([]);

   useEffect(() => {
      fetch("./topLeadData.JSON")
         .then((res) => res.json())
         .then((data) => setLeaders(data));
   }, []);

   return (
      <div style={{ backgroundColor: "#eaeded" }}>
         <div className="row">
            <div className="col-md-8 my-5 ms-4">
               <div className="row">
                  {leaders.map((person) => (
                     <Leader key={person.id} person={person}></Leader>
                  ))}
               </div>
            </div>
            <div className="col-md-3 my-5">Hello2</div>
         </div>
      </div>
   );
};

export default Leaders;
