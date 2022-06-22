import React, { useState } from "react";
import Forms from "./Form";
import Item from "./Item.js";
import { v4 as uuidv4 } from "uuid";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data"));
  else return [];
};

export const App = () => {
  const [name, setName] = useState("");
  const [sname, setSname] = useState("");
  const [number, setNumber] = useState();
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [list, setList] = useState(arr);
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      name,
      sname,
      number,
      address,
      company,
    };
    if (name && name.length <= 15 && sname && sname.length <= 15 && number.length <= 10 && !edit) {
      setList([...list, newItem]);

      setName("");
      setSname("");
      setNumber("");
      setAddress("");
      setCompany("");
    } else if (
      name &&
      name.length <= 15 &&
      sname &&
      sname.length <= 15 &&
      number &&
      number.length <= 10 &&
      address &&
      address.length <= 30 &&
      company &&
      company.length <= 30 &&
      edit &&
      editId
    ) {
      setList(
        list.map((el) => {
          if (el.id === editId) {
            return { ...el, name: name, sname: sname, number: number, address: address, company: company };
          }
          return el;
        })
      );
      setName("");
      setSname("");   
      setNumber("");
      setAddress("");
      setCompany("");
      setEditId(null);
      setEdit(false);
      setError("");
    } else if (!name) setError("Name cannot be blank.");
    else if (name.length > 15) setError("Character limit is 15.");
  };

  const filteredList = list.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" style={{ padding: 10 }}>
        <Navbar.Brand href="#">PhoneBook</Navbar.Brand>
        <Form className="d-flex .justify-content-xl-center">
          <FormControl
            type="search"
            placeholder="Search Contact"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="d-flex .justify-content-xl-center"
            aria-label="Search"
          />
          <Button style={{ marginLeft:5, }} variant="success">Search</Button>
        </Form>
      </Navbar>

      <Forms
        error={error}
        name={name}
        setName={setName}
        sname={sname}
        setSname={setSname}
        setNumber={setNumber}
        number={number}
        address={address}
        setAddress={setAddress}
        company={company}
        setCompany={setCompany}
        handleSubmit={handleSubmit}
      />

      <Item
        list={filteredList}
        setList={setList}
        setName={setName}
        setSname={setSname}
        setNumber={setNumber}
        setAddress={setAddress}
        setCompany={setCompany}
        setEdit={setEdit}
        setEditId={setEditId}
      />
    </>
  );
};
export default App;
