import { useEffect, useState } from "react";
import getMoreItem from "../store/getMore";
import { styled } from "styled-components";
import NFTCard from "../components/Card/NFTCard";
import TextHead from "../components/Text/TextHead";
import TextTitle from "../components/Text/TextTitle";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));

  @media (min-width: 834px) {
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

const SMarketPlace = styled.div`
  margin-bottom: 40px;
`

const MarketPlace = () => {
  const [nfts, setNfts] = useState([]);
  const { data, fetchData } = getMoreItem();

  useEffect(() => {
    const callApi = async () => {
      if(nfts.length === 0 ) {
        await fetchData();
        setNfts(data);
      }
    }
    callApi();
  }, [nfts]);
  return (
    <SMarketPlace>
      <div style={{marginBottom : "40px"}}>
        <TextHead text="Browse Marketplace" />
        <TextTitle text="Browse through more than 50k NFTs on the NFT Marketplace" />
      </div>
      <Wrapper>
        { nfts ?
          nfts.map((item) =>
            <NFTCard key={item.nftName} item={item} />
          )
          :<div>no data</div>
        }
      </Wrapper>
    </SMarketPlace>
  )
}

export default MarketPlace