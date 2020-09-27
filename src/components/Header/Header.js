import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="transparent" variant="light">
                <Navbar.Brand href="/home"> <img className="logo" src={logo} alt="" /> </Navbar.Brand>
                <Nav className="ml-auto px-5">
                    <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
                    <Link to="/login" className="login"> Login</Link>
                    <Button className="signUp-btn" variant="danger">Sign up</Button>

                </Nav>

            </Navbar>
            <div className="header">
                <form className="form">
                    <h1>Best food waiting for your belly</h1>
                    <br />
                    <input type="text" placeholder="Search food items" />
                    <Button className="signUp-btn" variant="danger">Sign up</Button>

                </form>
            </div>
        </div>
    );
};

export default Header;