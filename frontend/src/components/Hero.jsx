import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { ReactComponent as Rocket } from "../assets/rocket.svg";
import { NavLink } from 'react-router-dom';
import Button from './Button';

const SHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  .text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .text-head {
      line-height: 39.2px;
      background-color: transparent;
      color: #ffffff;
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
    }
    .text-tail {
      line-height: 22.4px;
      background-color: transparent;
      color: #ffffff;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }
  }
  a{
        text-decoration: none;
        display: block;
    }
    
    .btn {
        color: #ffffff;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        height: 60px;
        padding: 0px 50px;
        background-color: #a259ff;
      }
      .additional-info {
        display: flex;
        align-items: flex-start;
        gap: 30px;
        .info{
          display: flex;
          flex: 1;
          flex-direction: column;
        }
        .head {
          color: #ffffff;
          font-size: 22px;
          font-style: normal;
          font-weight: 700;
          line-height: 35.2px;
        }
      }
  .column-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media (min-width: 834px) {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
  }
`
const STop = styled.div`
`
const SMid = styled.div`
`
const SBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  svg {
    width: 24px;
    height: 24px;
  }
`
const getDimention = () => {
  const { innerWidth: width } = window;
  return { width };
}
const Hero = () => {
  const [dimention, setDimention] = useState(getDimention());

  useEffect(() => {
    function handleResize() {
      setDimention(getDimention());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  return (
    <div className='hero'>
      <SHero>
        {dimention.width < 834 ?
        <>
          <Top/>
          <Mid/>
          <Bottom/>
        </> :
        <>
          <div className="column-wrapper">
            <Top/>
            <Bottom/>
          </div>
          <Mid/>
        </>
      }
      </SHero>
    </div>
  )
}

const Top = () => {
  return (
    <STop>
      <div className="text">
        <p className="text-head">Discover Digital Art & Collect Nfts</p>
        <p className="text-tail">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
      </div>
    </STop>
  )
}
const Mid = () => {
  return (
    <SMid>
      <NavLink to={'/artist/1'}>
        <div>
          <img style={{ width: "100%", height: "100%" }} src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif" />
        </div>
      </NavLink>
    </SMid>
  )
}

const Bottom = () => {
  return (
  <SBottom>
    <NavLink to={'/marketplace'}>
      <Button classname="btn" logo={<Rocket />} name="Get Started" />
    </NavLink>
    <div className="additional-info">
      <div className="info total-sale">
        <div className='head'>240k+</div>
        <div>Total Sale</div>
      </div>
      <div className="info auctions">
        <div className='head'>100k+</div>
        <div>Auctions</div>
      </div>
      <div className="info artists">
        <div className='head'>240k+</div>
        <div>Artists</div>
      </div>
    </div>
  </SBottom>
  )
}

export default Hero