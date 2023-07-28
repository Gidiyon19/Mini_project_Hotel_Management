import React from "react";
import { Link } from 'react-router-dom';
import { MenuList } from "./MenuList";
import MenuItem from "./MenuItem";
import "./Menu.css";
// import Navigation from "./Navigation";

function Menu() {
  return (
    <>
    {/* <Navigation/> */}
    <body className="imgg">
      <h1><center><div className="nametop">Find your next Adventure  !</div></center></h1>
      <div className="menu">
        <div className="fendu">
          <pre>
        <input type="text" placeholder="Location" className="searchfield" />
        <button className="searchhh">Search</button>
        </pre>
        </div>
      <h1 className="menuTitle"> </h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <>
            <MenuItem
            key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              />
              <Link to="BookHotels"><button className="search-button1">Search Hotels</button></Link>
              </>
              );
        })}
      </div>
    </div>
    </body>
        </>
  );
}

export default Menu;