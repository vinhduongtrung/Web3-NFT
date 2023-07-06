import React from 'react'
import Hero from "../components/Hero"

import TopCreators from "../components/TopCreators"
import BrowseCategories from "../components/BrowseCategories"
import DiscoverMore from "../components/DiscoverMore"
import NFTHightLight from "../components/NFTHightLight"
import HowItWork from "../components/HowItWork"
import { styled } from 'styled-components'
import Trending from '../components/Trending'

const SHome = styled.div`
  .hero{
    padding: 40px 0;
  }
  .trendingCollection{
    padding: 40px;
  }
  .topCreators{
    padding: 40px 195px;
  }
  .browseCategories{
    padding: 40px 0;
  }
  .discoverMore{
    padding: 40px 195px;
  }
  .nFTHightLight{
    padding: 0;
  }
  .howItWork{
    padding: 40px 195px;
  }
  @media (min-width: 834px) {
    .hero {
      padding: 80px 0;
    }
    .trendingCollection{
      padding: 80px 0;
    }
  }
`
const Home = () => {
  return (
    <SHome>
      <Hero/>
      <Trending/>
      <TopCreators/>
      <BrowseCategories/>
      <DiscoverMore/>
      <NFTHightLight/>
      <HowItWork/>
    </SHome>
  )
}

export default Home