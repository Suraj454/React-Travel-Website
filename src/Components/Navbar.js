import React, { Component } from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { MenuItem } from './MenuItem';

 class Navbar extends Component {

    state = {clicked : false};
    handleCLick = () => {
        this.setState({clicked:!this.state.clicked})
    }
    render() {
  return (


   <nav className='navbar'>

   <h1 className='logo'>SAFAR </h1>

   <div className='menu-icons' onClick={this.handleCLick}>
   <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
     
   </div>

   <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>

   {MenuItem.map((item, index) => {
    return(
        <li key={index}> <Link className={item.cName} to={item.url}>{item.title}</Link></li>
    )
   })}

    <button>Sign Up </button>
 
   </ul>

   </nav>


  )
}
}

export default Navbar
