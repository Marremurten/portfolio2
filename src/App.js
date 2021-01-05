import React, { Component } from 'react' 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';

import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Martin Nordlund",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: "Hi, My Name is Martin",
        subTitle: "Junior Full Stack Developer",
        text: "Checkout my project below"
      },
      about: {
        title: "About Me", 
      },
      contact: {
        title: "Lets Talk",
      }
    }
  }
  
  render(){
  return (
    <Router >
      <Container className="p-0" fluid = {true}>
        <Navbar className='border-bottom' bg='transparent' expand='lg'>
          <Navbar.Brand>Martin Nordlund</Navbar.Brand>
          <Navbar.Toggle className='border-0' aria-control= "navbar-toggle"/>
          <Navbar.Collapse id='navbar-toggle'>  
            <Nav className='ml-auto'>
              <Link className='nav-link' to="/" >Home</Link>
              <Link className='nav-link' to="/about" >About</Link>
              <a href="#contact" className="nav-link"> Contact</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path='/' exact render= {()=> <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/> }/>
        <Route path='/about' render= {()=> <AboutPage title={this.state.about.title}/> }/>
        <Route path='/contact'  render= {()=> <ContactPage title={this.state.contact.title} /> }/>

        <Footer/>
      </Container>
    </Router> 
  );
  }
}

export default App;
