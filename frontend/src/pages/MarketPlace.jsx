import { useEffect } from "react";
import { styled } from "styled-components";
import NFTCard from "../components/Card/NFTCard";
import TextHead from "../components/Text/TextHead";
import TextTitle from "../components/Text/TextTitle";
import useGetMore from "../store/useGetMore";

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
  const { data, fetchData } = useGetMore();

  useEffect(() => {
    const callApi = async () => {
        await fetchData();
      }
    if(data.length === 0) {
      callApi();
    }
  }, []);
  return (
    <SMarketPlace>
      <div style={{marginBottom : "40px"}}>
        <TextHead text="Browse Marketplace" />
        <TextTitle text="Browse through more than 50k NFTs on the NFT Marketplace" />
      </div>
      <Wrapper>
        { 
          data.map((item) =>
            <NFTCard
             key={item.id}
             item={item}
             username={item.username}
             profile = {item.profilePicture} />
          )
        }
      </Wrapper>
    </SMarketPlace>
  )
}

export default MarketPlace