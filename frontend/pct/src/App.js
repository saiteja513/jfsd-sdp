import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { p_data } from './data.js';

function App() {
  const [search,setSearch] = useState('');

  return (
    <div className="App">
<<<<<<< HEAD
      <Container>
          <h1 className='text-center mt-4'>Search the products</h1>
          <Form>
            <InputGroup className='my-3'>
              <Form.Control onChange={(i) => setSearch(i.target.value)} placeholder='Search products'/>
            </InputGroup>
          </Form>
          <Table striped bordered hower>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              {p_data.filter((items) =>{
                return search.toLowerCase() === ""
                  ?items
                  : items.product_name.toLowerCase().includes(search);
              }).map((items) =>(
                <tr key={items.id}>
                <td>{items.product_name}</td>
                <td>{items.product_price}</td>
                <td>{items.available}</td>
              </tr>  
              ))}
              
            </tbody>
          </Table>
      </Container>
=======
    
>>>>>>> 394ff51fd563b5f417887b0bf9917ccd14449f65
    </div>
  );
}

export default App;
