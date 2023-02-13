import React, { Component } from 'react';
import "./Header.css"
import logo from '../images/800px-Logonetflix.png'

export default function Header() {
    return (
        <div>
            <div className="header">                
                <img src={logo}   className="logo"/>                
                <ul className="menu-list">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">TV Shows</a>
                    </li>
                    <li>
                        <a href="#">Movies</a>
                    </li>
                    <li>
                        <a href="#">New & Popular</a>
                    </li>
                    <li>
                        <a href="#">My List</a>
                    </li>
                    <li>
                        <a href="#">Browse by Languages</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}