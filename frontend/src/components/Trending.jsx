import { styled } from 'styled-components'
import CardCollection from './Card/CardCollection'
import TextHead from "./Text/TextHead"
import TextTitle from "./Text/TextTitle"
import { useEffect } from 'react';
import useTrendingNFT from '../store/useTrendingNFT';

const STrending = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 1440px) {
    .text-head {
      line-height: 45.6px;
      font-size: 38px;
    }
    .text {
      font-size: 22px;
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media (min-width: 834px) {
  display: grid;
  grid-template-columns: repeat(2, minmax(330px, 1fr));
  .child {
    height: 100px;
  }
  .best-product {
    width: 330px;
    height: 330px;
  }
}
  @media (min-width: 1024px) {
    grid-template-columns:repeat(3, minmax(330px, 1fr));
  }
`

const Trending = () => {
  const { data, fetchData } = useTrendingNFT();

  useEffect(() => {
    async function callApi() {
      await fetchData();
    }
    if (data.length === 0) {
      callApi();
    }
  }, [])

  return (
    <div className="trending">
      <STrending>
        <div className="top">
          <TextHead text="Trending Collection" />
          <TextTitle text="Checkout our weekly updated trending collection" />
        </div>
        <Wrapper>
          {
            data.map((item) =>
              <CardCollection key={item.username} item={item} />
            )
          }
        </Wrapper>
      </STrending>
    </div>
  )
}

export default Trending