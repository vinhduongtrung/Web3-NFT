import React, { useState } from 'react'
import { styled } from 'styled-components'
import { ReactComponent as Shopping } from "../assets/shopping.svg";
import { ReactComponent as NavMenu } from "../assets/nav-menu.svg";
import { NavLink } from 'react-router-dom';

const SHeader = styled.header`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    background-color: #2B2B2B;
    color:white;
    .logo {
        display: flex;
        align-items: center;
    }
    .logo-title {
        margin-left: 8px;
    }
    .nav-links {
        height: 100%;
    }
    .nav-links ul {
        margin: 0;
        padding: 0;
        display: flex;
    }
    .nav-links li {
        list-style: none;
        font-size: 16px;
        font-weight: 600;
        font-family: 'work sans';
        padding: 1rem;
    }
    a {
        text-decoration: none;
        color: white;
        padding: 1rem;
        display: block;
    }
    .toggle-button {
        position: absolute;
        vertical-align: middle;
        right: 1rem;
        display: none;
        width: 30px;
        height: 21px;
    }
    .toggle-button .bar {
        height: 3px;
        width: 100%;
        background-color: white;
        border-radius: 10px;
    }
    @media (max-width: 974px) {
        flex-direction: column;
        align-items: flex-start;

        .toggle-button {
            display: flex;
        }
        .nav-links {
            display: none;
            width: 100%;
        }
        .nav-links ul {
            width: 100%;
            flex-direction: column;
        }

        .nav-links ul li {
            text-align: center;
        }

        a {
            padding: .5rem 1rem;
        }
        .active {
            display: flex;
        }
    }
`
const Header = () => {
    const [isActive, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!isActive)
    }
    return (
        <SHeader>
            <NavLink to={'/'} className='logo'>
                <Shopping />
                <div className="logo-title">NFT Marketplace</div>
            </NavLink>
            <NavMenu className="toggle-button" onClick={toggleActive}/>
            <div className={isActive ? "nav-links active" : "nav-links"}>
                <ul>
                    <li><NavLink to ={'/marketplace'}>Marketplace</NavLink></li>
                    <li><NavLink to ={'/rankings'}>Rankings</NavLink></li>
                    <li><NavLink to ={'/register'}>Connect a wallet</NavLink></li>
                    <li><NavLink to ={'/register'}>Sign up</NavLink></li>
                </ul>
            </div>
        </SHeader>
    )
}

export default Header