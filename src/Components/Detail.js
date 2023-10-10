import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Label, Navbar, NavItem, NavLink, Progress } from 'reactstrap';
import { Line } from 'react-chartjs-2';

function Detail() {
  const colorScheme = () => {
    let ar = ['success', 'danger','warning','info'];

    return ar[ Math.floor(Math.random() * 4)]
  }
  useEffect(() => {
    let accTk = localStorage.getItem('acc_tk');
    if (accTk === undefined) {
      window.open('https://healthcheckclient.vercel.app', '_self');
    }
    axios
      .get('https://healthcheckserver.vercel.app/user', {
        headers: {
          acctk: accTk,
        },
      })
      .then((response) => {
        if (response.data.message === 'User Details are here') {
          setUser(response.data.data[0]);
        } else {
          alert("response.data.message");
        }
      })
      .catch((error) => {
        if(error.response.data.message === 'Request failed with status code 401'){
          window.open("https://healthcheckclient.vercel.app/", "_self");
        }
        console.log(error);
        alert("error.message");
      });
  }, []);
  const renderUser = () => {
    if(user.name === 'No user'){
      return(
        <h2 style={{color:'white'}}>User Not Found</h2>
      );
    }
    else{
      return(
        <div className='row d-flex justify-content-center'>
        <div className='row ml-3 d-flex justify-content-left'>
          <div className='col-12 col-md-3 d-flex align-items-center'>
            <h6 style={{color:'white'}}>Name : </h6>
          </div>
          <div className='col-12 col-md-8 d-flex align-items-center'>
            <h6 style={{color:'white'}}>{user.name}</h6>
          </div>
        </div>
        <div className='row ml-3 d-flex justify-content-left'>
          <div className='col-12 col-md-3 d-flex align-items-center'>
            <h6 style={{color:'white'}}>Email : </h6>
          </div>
          <div className='col-12 col-md-8 d-flex align-items-center'>
            <h6 style={{color:'white'}}>{user.email}</h6>
          </div>
        </div>
        </div>
      );
    }
  }
  const [user, setUser] = useState({
    name: 'Pratik Singh',
    email: 'pratikthakur2019@gmail.com',
    minutes: {
      '9:2023': '234',
      '8:2023': '90'
    },
    calorie: {
      '9:2023': '345',
      '8:2023': '578'
    }
  });
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '10px', // Neumorphism border radius
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)', // Neumorphism shadow
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Glassmorphism background color
  };

  const renderBars = (ar) => {
    if(user.name === 'No user' || Object.keys(ar).length === 0){
      return(
        <div>
          <h4>No data</h4>
        </div>
      );
    }
    else{
      return Object.keys(ar).map((e1,k1) => {
        let val = user.minutes[e1]/150;
        val = val >=1 ? 100 : val*100
        console.log(val);
        return(
          <div key={k1} className='row m-3 d-flex justify-content-center'>
            <div className='col-12 mt-3 mb-3 col-md-1 d-flex align-items-center'>
              <Label><h6 style={{color:'white'}}>{e1}</h6></Label>
            </div>
            <div className='col-12 mb-3 mt-3 col-md-10 d-flex align-items-center'>
              <Progress className='col-12 col-md-10 d-flex align-items-center' color={colorScheme()} value={val}>{val}</Progress>
            </div>
          </div>
        );
      })
    }
  }


  const chartContainerStyle = {
    width: '50%',
    padding: '20px',
    color: 'white',
    borderRadius: '10px', // Neumorphism border radius
    boxShadow: '5px 5px 10px #888888', // Neumorphism shadow
    background: 'rgba(255, 255, 255, 0.5)', // Glassmorphism background color
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
      <div className="container">
        <div className='shadow m-3' style={containerStyle}>
          <div className='row m-4 t-4 d-flex justify-content-left'>
            <br></br>
            <div className='col-12 d-flex align-items-center'>
              <br></br>
              <h3 style={{color:'white'}}>User Details</h3>
            </div>
          </div>
        {renderUser()}  
        </div>
        <br></br>
        <div style={containerStyle} className='shadow m-3'>
          <div className='row d-flex justify-content-left m-2'>
            <div className='col-12 m-3 d-flex align-items-center'>
              <h4 style={{color:'white'}}>Heart Minutes</h4>
            </div>
          </div>
          {renderBars(user.minutes === undefined ? []: user.minutes)}
        </div>
        <br></br>
        <div className='shadow m-3' style={containerStyle}>
        <div className='row d-flex justify-content-left m-2'>
            <div className='col-12 m-3 d-flex align-items-center'>
              <h4 style={{color:'white'}}>Calories Burnt</h4>
            </div>
          </div>
        {renderBars(user.calorie === undefined ? []: user.calorie)}
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Detail;
///////////////////////////////////////////

