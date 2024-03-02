import React, { useState } from 'react'
import './header.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'

function Header() {
    const [isMenuActive, setIsActiveMenu] = useState(true)

    const handleMenuActive = ()=>{
        setIsActiveMenu(!isMenuActive)
    }

    const handleMenuActiveFalse = () =>{
        setIsActiveMenu(true)
    }

    return (
        <header>
            <div className="container">
                <div className="top-header">
                    <div className='top-header-left'>
                        <span className='left1'>India <i class="ri-arrow-down-s-line"></i></span>
                        <span className='left2'>Rupee <i class="ri-arrow-down-s-line"></i></span>
                    </div>
                    <div className='top-header-right'>
                        <div className="account same-right">
                            <i class="ri-user-line"></i>
                            <span>My Account</span>
                        </div>
                        <div className="wishlist same-right">
                            <i class="ri-heart-2-fill"></i>
                            <span>Wishlist</span>
                        </div>
                        <div className="map same-right">
                            <i class="ri-map-pin-fill"></i>
                            <span>Map</span>
                        </div>
                    </div>
                </div>
                <div className="main-header">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="right-header">
                        <nav>
                            <ul className={`${isMenuActive ? 'responsive-btn' : ''}`}>
                                <li>
                                    <Link onClick={handleMenuActiveFalse} to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link onClick={handleMenuActiveFalse} to={'/product'}>Products</Link>
                                </li>
                                <li>
                                    <Link onClick={handleMenuActiveFalse} to={'about'}>About</Link>
                                </li>
                                <li>
                                    <Link onClick={handleMenuActiveFalse} to={'contact'}>Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="cart-box">
                            <div className="cart">
                                <i className="ri-shopping-cart-fill text-green-400"></i>
                                <p>0 Item - <span className=' text-green-400'>$0.00</span></p>
                            </div>
                        </div>
                        <div className="menubar">
                        <i class="ri-menu-line" onClick={handleMenuActive}></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
