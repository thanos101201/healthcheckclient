import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, NavItem, NavLink, Navbar } from 'reactstrap';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import axios from 'axios';
function Home() {
    const handleSignin = () => {
        axios.get('http://localhost:3001/user/url').then((response) => {
            window.open(response.data.url, "_self");
        }).catch((er) => {
            alert(er.message);
        })
    }
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        borderRadius: '10px', // Neumorphism border radius
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)', // Neumorphism shadow
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Glassmorphism background color
      };
    return (
    <div style={containerStyle}>
        <Navbar style={containerStyle}>
            <NavItem>
                <NavLink>
                    <h1 style={{color:'white'}}>Health Check</h1>
                </NavLink>
            </NavItem>
        </Navbar>
        <div className='container'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Form className='shadow' style={containerStyle}>
                    <FormGroup>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-6 d-flex align-items-center'>
                                <Button className='btn btn-danger' onClick={() => handleSignin()}>
                                    <strong>
                                    <AiOutlineGooglePlus />Sign In
                                    </strong>
                                </Button>
                            </div>
                        </div>
                    </FormGroup>
                </Form>    
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    </div>
    )
}

export default Home