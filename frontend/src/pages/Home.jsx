import Hero from "../components/Hero"
import { styled } from 'styled-components'
import TopCreators from "../components/TopCreators"
import Category from "../components/Category"
import Discover from "../components/Discover"
import HowItWork from "../components/HowItWork"
import Trending from '../components/Trending'

const SHome = styled.div`
  .hero, .trending, .category, .howItWork{
    padding: 40px 0;
  }
  .topCreators{
    padding: 40px 195px;
  }
  .discoverMore{
    padding: 40px 195px;
  }
  .nFTHightLight{
    padding: 0;
  }
  @media (min-width: 834px) {
    .hero, .trending, .category, .howItWork {
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
      <Discover/>
      <HowItWork />
    </SHome>
  )
}

export default Home