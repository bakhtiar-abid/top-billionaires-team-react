import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Leaders.css";

const Leaders = () => {
   const [leaders, setLeaders] = useState([]);

   useEffect(() => {
      fetch("./topLeadData.JSON")
         .then((res) => res.json())
         .then((data) => console.log(data));
   }, []);

   return (
      <div style={{ backgroundColor: "#eaeded" }}>
         <div className="row">
            <div className="col-md-8 my-5 ms-4">
               <CardGroup>
                  <Card className="me-4">
                     <Card.Img variant="top" src="holder.js/100px160" />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                           This is a wider card with supporting text below as a
                           natural lead-in to additional content. This content
                           is a little bit longer.
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small className="text-muted">
                           Last updated 3 mins ago
                        </small>
                     </Card.Footer>
                  </Card>
                  <Card className="me-4">
                     <Card.Img variant="top" src="holder.js/100px160" />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                           This card has supporting text below as a natural
                           lead-in to additional content.{" "}
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small className="text-muted">
                           Last updated 3 mins ago
                        </small>
                     </Card.Footer>
                  </Card>
                  <Card>
                     <Card.Img variant="top" src="holder.js/100px160" />
                     <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                           This is a wider card with supporting text below as a
                           natural lead-in to additional content. This card has
                           even longer content than the first to show that equal
                           height action.
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer>
                        <small className="text-muted">
                           Last updated 3 mins ago
                        </small>
                     </Card.Footer>
                  </Card>
               </CardGroup>
            </div>
            <div className="col-md-3">Hello2</div>
         </div>
      </div>
   );
};

export default Leaders;
