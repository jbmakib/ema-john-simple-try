import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Reveiew</a>
                <a href="/invent">Manage Inventory</a>
            </nav>
        </header>
    );
};

export default Header;
