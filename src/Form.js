import React from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const Forms = ({
  error,
  name,
  sname,
  number,
  address,
  company,
  handleSubmit,
  setName,
  setSname,
  setNumber,
  setAddress,
  setCompany,
}) => {
  return (
    <>
      <Container
        className="text-left"
        style={{
          padding: 30,
          width: 550,
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Row className=" mb-3 align-items-left">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Sur Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={sname}
                onChange={(e) => setSname(e.target.value)}
              />
            </Form.Group>
            </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            
          </Row>
          <Row className=" mb-3 align-items-left">
            <Form.Group as={Col}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>
            </Row>
          

          <Button style={{ marginTop:20, }} variant="success" type="submit">
            Add Contact
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default Forms;
