import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import '../assets/css/header.css'
import logo from '../assets/img/logo.svg'

import { connect } from "react-redux";

function Header(props) {

    const [menuToggle, setMenuToggle] = useState(false);
    const [cart, setCart] = useState(props.AddedItems);
    const [cartBtn, setCartBtn] = useState(false);
    const [userLogin, setUserLogin] = useState(localStorage.getItem('user'));
    
    // const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    // console.log("props.AddedItems - Header : ", props.AddedItems);

    const logout = (value) => {
        if (value == 'account') {
            props.history.push('/account');
        }
        if (value == 'logout') {
            localStorage.clear('user');
            window.location.href = "/login";
        }
        setCartBtn(!cartBtn);
    }

    return(
        <section>
            <div className="header">

                <div className={"mobile-menu-toggle " + (menuToggle ? 'change' : '')} onClick={() => setMenuToggle(!menuToggle)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div className="desktop-menu container">
                    <div className="row">
                        <div className="col-2 col-md-2 col-lg-2">
                            <div className='logo'>
                                <img src={logo} />
                            </div>
                        </div>

                        <div className="col-8 col-md-8 col-lg-8">
                            <div className="nav">
                                 <ul>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/products">Products</Link></li>
                                    <li><Link to="/faqs">FAQs</Link></li>
                                    <li><Link to="/howitwork">How It Work</Link></li>
                                    <li><Link to="/mobileapp">Mobile App</Link></li>
                                    {/* <li><Link to="/covidkit">Covid Kit</Link></li> */}
                                    <li><Link to="/contact">Contact</Link></li>
                                    {/* <li><Link to="/payment">Payment</Link></li> */}
                                    {
                                        userLogin == null ?
                                        <li><Link to="/login">Login</Link></li>
                                        :
                                        null
                                    }
                                 </ul>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="right-nav">
                                {
                                    userLogin != null ?
                                    <div className="custom-dropdown">
                                        <a onClick={()=> { setCartBtn(!cartBtn) }}>
                                            Account 
                                            {
                                                cartBtn ? 
                                                <i class="pl-2 fas fa-chevron-up"></i>
                                                :
                                                <i class="pl-2 fas fa-chevron-down"></i>
                                            }
                                        </a>
                                        <ul className={ cartBtn ? 'open' : 'closed' }>
                                            <li onClick={ (e) => {logout('account')} }>Account</li>
                                            <li onClick={ (e) => {logout('logout')} }>Logout</li>
                                        </ul>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </div>
                       
                    </div>

                    <div className="cart-btn">
                        <Link to="/cart">
                            <i className="fas fa-shopping-cart"></i>
                            <div className="cart-count">{props.AddedItems ? props.AddedItems.length : '0'}</div>
                        </Link>
                    </div>
                </div>

                <div className={"mobile-menu sidenav " + (menuToggle ? 'open' : 'close')}>
                    <ul className="right-nav">
                        {/* <li>
                            <select onChange={ (e) => {redirectTo(e.target.value); setMenuToggle(!menuToggle)} }>
                                <option value="/my-profile">My Profile</option>
                                <option value="/account-settings">Account Settings</option>
                                <option value="/billing-history">Billing History</option>
                                <option value="/security">Security</option>
                                <option value="/notifications">Notifications</option>
                            </select>
                        </li> */}
                        <li>
                            <Link to="/cart">
                                <i className="fas fa-shopping-cart"></i>
                                <div className="cart-count">{props.AddedItems ? props.AddedItems.length : '0'}</div>
                            </Link>
                        </li>
                    </ul>

                    <Link to="/home" onClick={() => setMenuToggle(!menuToggle)}>Home</Link>
                    <Link to="/products" onClick={() => setMenuToggle(!menuToggle)}>Products</Link>
                    <Link to="/faqs" onClick={() => setMenuToggle(!menuToggle)}>FAQs</Link>
                    <Link to="/howitwork" onClick={() => setMenuToggle(!menuToggle)}>How It Work</Link>
                    <Link to="/mobileapp" onClick={() => setMenuToggle(!menuToggle)}>Mobile App</Link>
                    <Link to="/covidkit" onClick={() => setMenuToggle(!menuToggle)}>Covid Kit</Link>
                    <Link to="/contact" onClick={() => setMenuToggle(!menuToggle)}>Contact</Link>
                    {/* <Link to="/payment" onClick={() => setMenuToggle(!menuToggle)}>Payment</Link> */}
                    <Link to="/login" onClick={() => setMenuToggle(!menuToggle)}>Login</Link>
                    <Link to="/checkout" onClick={() => setMenuToggle(!menuToggle)}>Check Out</Link>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    AddedItems: state.task.AddedItems
});

export default connect(
    mapStateToProps,
)(withRouter(Header));