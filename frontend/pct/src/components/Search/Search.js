import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import { p_data } from './data';
import Navbars from '../navbar/Navbars';

const Search = () => {
    const [search,setSearch] = useState('');
    const navigate = useNavigate();
    return (
      <>
      <Navbars/>
        <Container>
            <h1 className='text-center mt-4'>Search the products</h1>
            <Button variant="contained" color='success' onClick={()=>navigate("/products")} >View All Products </Button><br/><br/>
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
      </>
    );
}

export default Search