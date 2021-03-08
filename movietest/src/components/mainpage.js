import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
const Mainpage =() => {
  return (
    <>
    <style type="text/css">
    {`
    .homebutton {
      width: 250px;
      color: #05a327;
      border-color: #05a327;
    }
    .homebutton:hover {
        border-color: #02d930;
        color: #02d930;
        background-color: transparent;
    }   
    body{
        background-color: #004991;
    }
    .button-container{
        justify-content: center;
        position: fixed;
        align-items: center;
        display: flex;
        width: 100%;
        top: 60%;
    }
    .header1{
        
        width: 100%;
        position: fixed;
        text-align: center;
        top: 25%;
    }
    .heading1{
        font-size: 100px;
    }
    .header2{
        width: 100%;
        position: fixed;
        text-align: center;
        top: 42%;
    }
    
    `}
  </style>
  <Container className="header1" fluid="true">
  <h1 className="heading1">We live in a Society</h1></Container>
  <Container className="header2" fluid="true">
  <h3 className="header2">Bottom text</h3></Container>
    <Container className="button-container" fluid="true">
    <Button variant="outline-primary" className="homebutton mr-5" size="lg" href="/search">Search</Button>{''}
    <Button variant="outline-primary" className="homebutton mr-5" size="lg" href="/exampleRewritten">Query Data</Button>{''}
    <Button variant="outline-primary" className="homebutton" size="lg" href="/statistics">Charts</Button>{''}
    </Container>
    </>
  );
}

export default Mainpage;