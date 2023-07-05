import React from 'react'
import { styled } from 'styled-components'

const SHero = styled.div`
`
const Hero = () => {
  return (
    <div className='hero'>
      <SHero>
        <div className="top">
          <p>Discover Digital Art & Collect Nfts</p>
          <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
        </div>
        <div className="mid"></div>
        <div className="bototm"></div>
      </SHero>
    </div>
  )
}

export default Hero