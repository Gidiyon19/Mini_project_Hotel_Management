import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Main.css';
import "./Style.css";
import Footer from './Footer';
import Feedback from './Feedback';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { logout,selectUser } from "./userSlice";
const Main = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <>
    <body className='mtop1'>

    <header>
    
			<div className='png1'></div>
			<nav ref={navRef}>
      <Link to="Flights"><a href="/#">Hotel Search</a></Link>
        <Link to="ReviewPage"><a href="/#">Review</a></Link>
        <Link to="About"><a href="/#">Offers</a></Link>
        {/* <Link to="Menu"><a href="/#">Activities</a></Link> */}
        <Link to="Room"><a href="/#">Rooms</a></Link>
        {/* <Link to="Payment"><a href="/#">Payment</a></Link> */}
        {/* <Link to="PhotoCollage"><a href="/#">Feedback</a></Link> */}
        {/* <Link to="Around"><a href="/#">HRegister</a></Link> */}
        {/* <div className='Boys'>
        <Link to="Login"><a href="/#">Sign In</a></Link>
        <Link to="Register"><a href="/#">Create Account</a></Link>
        </div> */}
				{/* <button
					className="nav1"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</nav>
			<button
				className="nav2"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
     <div className='main1'>
        <div className='hea'>
          <center>
        <h1>Welcome {user.name} ! </h1>
        <h3>One Step close to Paradise</h3>
        </center>
        </div>
    <div className="search1">
      <input type="text" placeholder="Location" className="search-field1" />
      
    
      <Link to='Room'><button className="search-button1">Search</button></Link>
    </div>
    </div>
    <div>
      <Footer/>
    </div>
      </body>
    </>
  );
};

export default Main;