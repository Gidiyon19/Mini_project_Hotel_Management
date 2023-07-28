import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Main.css';
import "./Style.css";
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Navigation = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <>
    <body className='mtop'>

    <header>
    
			<div className='png1'></div>
			<nav ref={navRef}>
				<a href="/#">Flights</a>
				<a href="/#">Hotels</a>
				<a href="/#">Offers</a>
				<a hre f="/#">Apartments</a>
        <a href="/#">Activities</a>
        <a href="/#">Contacts</a>

        <div className='Boys'>
        <Link to="Login"><a href="/#">Sign In</a></Link>
        <Link to="Register"><a href="/#">Create Account</a></Link>
        </div>
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
            </body>
            </>
            );
            };
export default Navigation;