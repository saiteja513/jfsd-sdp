import React, { useEffect, useState } from 'react'
import Snav from '../navbar/Snav';
import axios from "axios";

function Product() {

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        // const result = await axios.get("http://localhost:8080/users")
        const result = await axios.get("http://localhost:8080/allproducts")
        setUsers(result.data);
    }
  return (
    <>
    <Snav/>
    <div className='container'>
        {
        /* <table class="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                </tr>
            </thead>
            <tbody>

                {
                    users.map((user,index)=>(
                        <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.pro_name}</td>
                        <td>{user.price}</td>
                        <td>{user.brand}</td>
                        <td>{user.pro_link}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table> */
        }
        <div>
            {users.map((user,index) => (
                <div key={user.pro_id} className="card">
                <h2>{user.pro_name}</h2>
                <h2>{user.price}</h2>
                <p>{user.brand}</p>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Product