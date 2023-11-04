import React, { useEffect, useState } from 'react'
import Snav from '../navbar/Snav';
import axios from "axios";
import {Button,Card,Container,Row} from 'react-bootstrap';

function Product() {

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/allproducts")
        setUsers(result.data);
    }
  return (
    <>
    <Snav/>
    <Container>
        <Row>
            {users.map((user,index) => (
                <Card style={{ width: '15rem' ,height:'25rem'}}>
                    <Card.Img variant="top" src={user.pro_link} width={100}/>
                    <Card.Body>
                        <Card.Title>{user.pro_name}</Card.Title>
                        <Card.Text>
                            <h2>₹{user.price}</h2>
                            <p>{user.brand}</p>
                        </Card.Text>
                        <Button variant="primary">Go to product</Button>
                    </Card.Body>
                </Card>
            ))}
        </Row>
    </Container>
    </>
  )
}

export default Product