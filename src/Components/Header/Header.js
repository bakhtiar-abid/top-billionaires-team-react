import Button from "@restart/ui/esm/Button";
import React from "react";
import {
   Container,
   Form,
   FormControl,
   Nav,
   Navbar,
   NavDropdown,
} from "react-bootstrap";
import "./Header.css";

const Header = () => {
   return (
      <div>
         {/* Navbar Section Start */}
         <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
               <Navbar.Brand href="#">Top Billionaires</Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav
                     className="me-auto my-2 my-lg-0"
                     style={{ maxHeight: "100px" }}
                     navbarScroll
                  >
                     <Nav.Link href="#action1">Home</Nav.Link>
                     <Nav.Link href="#action2">Info</Nav.Link>
                     <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">
                           Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                           Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                           Something else here
                        </NavDropdown.Item>
                     </NavDropdown>
                     <Nav.Link href="#">News</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                     <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        style={{ width: "400px" }}
                     />
                     <Button className=" btn btn-outline-primary">
                        Search
                     </Button>
                  </Form>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         {/* Navbar section end */}
         {/* top banner section start */}
         <section className="bg-dark" style={{ height: "400px" }}>
            <h1 className="text-white pt-5">
               Let's make a top Billionaires team
            </h1>
            <h5 className="text-white pt-4">
               Great leaders inspire their workers, whereas some believe that
               being a great leader entails encouraging people and inspiring
               their creativity.{" "}
            </h5>
            <h3 className="text-white">
               {" "}
               Total Budget: 100 <span className="fw-bolder">
                  {" "}
                  Billion{" "}
               </span>{" "}
            </h3>
         </section>
         {/* top banner section end */}
      </div>
   );
};

export default Header;
