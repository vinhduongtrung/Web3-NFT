import React, { useState } from 'react'
import { styled } from 'styled-components'
import { ReactComponent as Shopping } from "../assets/shopping.svg";
import { ReactComponent as Title } from "../assets/logo-title.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as NavMenu } from "../assets/nav-menu.svg";
import { NavLink } from 'react-router-dom';
import Button from './Button';
import useWallet from '../store/wallet';
import useUser from '../store/useUser';

const SHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #2B2B2B;
    color:white;
    padding: 20px 50px;
    .logo {
        display: flex;
        align-items: center;
    }
    .logo-title {
        margin-left: 12px;
        height: 20px;
        width: 199px;
    }
    svg {
        width: 32px;
        height: 32px;
        fill: #858584;
        color: white;
    }
    .nav-links {
        height: 100%;
    }
    .nav-links ul {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
    }
    .nav-links li {
        list-style: none;
        font-size: 16px;
        font-weight: 600;
        padding: 1rem;
    }
    a {
        text-decoration: none;
        color: white;
        display: block;
    }
    .toggle-button {
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
    @media (max-width: 1024px) {
        display: block;
        align-items: flex-start;
        padding: 15px 50px;
        svg {
        width: 24px;
        height: 24px;
        }
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
        .actives {
            display: flex;
            justify-content: center;
        }
        .logo-title {
            height: 15px;
            width: 150px;
        }
    }
    @media (max-width: 375px) {
        padding: 15px 30px;
        svg {
        width: 24px;
        height: 24px;
        }
    }
    .signUpBtn {
        height : 60px;
        background-color:#a259ff;
        padding: 0px 30px;
    }
`
const HeaderTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Header = () => {
    const [isActive, setActive] = useState(false)
    const {user} = useUser();
    const toggleActive = () => {
        setActive(!isActive)
    }
    const {hash} = useWallet();
    
    return (
        <SHeader>
            <HeaderTop>
                <NavLink to={'/'} className='logo'>
                    <Shopping />
                    <Title className="logo-title"/>
                </NavLink>
                <NavMenu className="toggle-button" onClick={toggleActive}/>
            </HeaderTop>
            <div className={isActive ? "nav-links actives" : "nav-links"}>
                <ul>
                    <li>
                        <NavLink to ={'/marketplace'}>
                            <Button name="Marketplace"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ={'/rankings'}>
                            <Button name="Rankings"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ={'/connect'}>
                            {hash ? <Button name="Metamark"/> :
                            <Button name="Connect a wallet"/>
                            }
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ={`/artist-page`}>
                            
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ={'/register'}>
                        {user ? <Button name={user.username}/> : 
                            <Button logo={<User/>} name="Sign Up" classname="signUpBtn"/>
                        }
                        </NavLink>
                    </li>
                </ul>
            </div>
        </SHeader>
    )
}

export default Header