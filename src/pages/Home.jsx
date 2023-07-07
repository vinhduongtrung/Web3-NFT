import React from 'react'
import Hero from "../components/Hero"
import { styled } from 'styled-components'
import TopCreators from "../components/TopCreators"
import Category from "../components/Category"
import Discover from "../components/Discover"
import HowItWork from "../components/HowItWork"
import Trending from '../components/Trending'

const SHome = styled.div`
  .hero{
    padding: 40px 0;
  }
  .trending{
    padding: 40px 0;
  }
  .topCreators{
    padding: 40px 195px;
  }
  .category{
    padding: 40px 0;
  }
  .discoverMore{
    padding: 40px 195px;
  }
  .nFTHightLight{
    padding: 0;
  }
  .howItWork{
    padding: 40px 0;
  }
  @media (min-width: 834px) {
    .hero {
      padding: 80px 0;
    }
    .trending{
      padding: 80px 0;
    }
    .category {
      padding: 80px 0;
    }
    .howItWork{
      padding: 80px 0;
    }
  }
`
const Home = () => {
  return (
    <SHome>
      <Hero />
      <Trending />
      <TopCreators />
      <Category />
      <Discover />
      <HowItWork />
    </SHome>
  )
}

export default Home