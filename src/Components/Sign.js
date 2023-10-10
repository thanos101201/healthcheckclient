import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardHeader, Form, FormGroup, NavItem, NavLink, Navbar } from 'reactstrap';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
function Sign() {
    const location = useLocation();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get("code");
        axios.get('https://healthcheckserver.vercel.app/user/points', {
            headers: {
                code: code
            }
        }).then((response) => {
            if(response.data.message === 'User added' || response.data.message === 'User updated'){
                localStorage.setItem('acc_tk', response.data.acc_tk);
                window.open("https://healthcheckclient.vercel.app/detail", "_self");
            }
            else{
                alert(response.data.message);
            }
        }).catch((Eror) => {
            alert(Eror.message);
        })
    }, []);
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
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
            <div className='row d-flex justify-content-center'>
                <div className='col-12 d-flex align-items-center'>
                    <Card style={containerStyle}>
                        <CardHeader>
                            <h2 style={{color:'white'}}>
                                <strong>Signing In please wait for a moment</strong>
                            </h2>
                            <h4 style={{color:'white'}}>
                                <strong>
                                    If not redirected in 10 seconds please click <a href="/details">here</a> to go to the health details page
                                </strong>
                            </h4>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
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
    )
}

export default Sign