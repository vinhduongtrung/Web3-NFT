import React from 'react'
import { styled } from 'styled-components'
import { ReactComponent as Shopping } from "../assets/shopping.svg";
import { ReactComponent as Title } from "../assets/logo-title.svg";
import { ReactComponent as VideoGame } from "../assets/videogame.svg";
import { ReactComponent as Youtube } from "../assets/youtube.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { NavLink } from 'react-router-dom';


const SFooter = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    margin: 0 13.54%;
    @media (max-width: 834px) {
        gap: 49px;
        margin: 0 8.63%;
    }
    @media (max-width: 375px) {
        gap: 20px;
        margin: 0 8%;
    }
`

const FooterTop = styled.div`
    display: flex;
    gap: 30px;
    .footer_head_column {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .logo {
        display: flex;
        align-items: center;
    }
    .logo-title {
        margin-left: 12px;
        height: 20px;
        width: 199px;
    }
    h2{
        font-size: 22px;
        font-weight: 700;
        background-color: transparent;
        line-height: 35.2px;
    }
    p, a{
        font-size: 16px;
        font-weight: 400;
        color:#CCCCCC;
    }
    a{
        text-decoration: none;
        display: block;
    }
    svg {
        width: 20px;
        height: 20px;
        fill: #858584;
        color: white;
    }
    @media (max-width: 834px) {
        flex-direction: column;
    }
`
 const FooterBottom = styled.div`
    border-top: 1px solid #FFFFFF;
    padding-top: 20px;
 `
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    width: 200px;
`

const Footer = () => {
  return (
    <SFooter>
    <FooterTop>
        <div className='footer_head_column'>
            <div className='logo'>
                <Shopping />
                <Title className="logo-title"/>
            </div>
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <p>Join our community</p>
            <GridContainer>
                <VideoGame/>
                <Youtube/>
                <Twitter/>
                <Instagram/>
            </GridContainer>
        </div>
        <div className='footer_head_column'>
            <h2>Explore</h2>
            <NavLink to ={'/marketplace'}>Marketplace</NavLink>
            <NavLink to ={'/rankings'}>Rankings</NavLink>
            <NavLink to ={'/register'}>Connect a wallet</NavLink>
        </div>
        <div className='footer_head_column'>
            <h2>Join Our Weekly Digest</h2>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
            <p>Enter email address</p>
            <p>Subcribe</p>
        </div>
        
    </FooterTop>
        <FooterBottom>
            <p>Ⓒ NFT Market. Use this template freely.</p>
        </FooterBottom>
    </SFooter>
  )
}

export default Footer