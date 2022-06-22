import { Button, Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Item = ({
  list,
  setCategory,
  setList,
  setName,
  setSname,
  setNumber,
  setAddress,
  setCompany,
  setEdit,
  setEditId,
}) => {
  const handleDelete = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  //Edit Todo
  const handleEdit = (id) => {
    const editItem = list.find((el) => el.id === id);
    setName(editItem.name);
    setSname(editItem.sname);
    setNumber(editItem.number);
    setAddress(editItem.address);
    setCompany(editItem.company);
    setEdit(true);
    setEditId(id);
  };

  return (
    <>
      <Container className="text-center">
        <div style={{ overflow: "scroll", height: "50vh" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Number</th>
                <th>Address</th>
                <th>Company</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {list
                .sort((a, b) =>
                  a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
                )
                .map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.sname}</td>
                      <td>{item.number}</td>
                      <td>{item.address}</td>
                      <td>{item.company}</td>
                      <td>
                        <Button
                          variant="success"
                          onClick={() => handleEdit(item.id)}
                        >
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button
                          onClick={() => handleDelete(item.id)}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};
export default Item;
