import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import NFTCard from "../components/Card/NFTCard";
import TextHead from "../components/Text/TextHead";
import TextTitle from "../components/Text/TextTitle";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 10px;

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
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [nftList, setNFTList] = useState([]);
  const [wasLastList, setWasLastList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let limit;
      if (window.innerWidth >= 1200) {
        limit = 6;
      } else if (window.innerWidth >= 768) {
        limit = 6;
      } else {
        limit = 3;
      }
      const response = await fetch(`https://danielaws.tk/group8/api/v1/nft/findAll/${currPage}/${limit}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      console.log(data);
      if (!data.length) {
        setWasLastList(true);
        return;
      }
      setPrevPage(currPage);
      setNFTList([...nftList, ...data])
    }
    if (!wasLastList && prevPage !== currPage) {
      fetchData();
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currPage, wasLastList, prevPage, nftList]);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      setCurrPage(currPage + 1);
    }
  };
  return (
    <SMarketPlace>
      <div style={{ marginBottom: "40px" }}>
        <TextHead text="Browse Marketplace" />
        <TextTitle text="Browse through more than 50k NFTs on the NFT Marketplace" />
      </div>
      <div ref={listInnerRef}>
        <Wrapper>
          {
            nftList.map((item) =>
              <NFTCard
                key={item.id}
                item={item}
                username={item.username}
                profile={item.profilePicture} />
            )
          }
        </Wrapper>
      </div>
    </SMarketPlace>
  )
}

export default MarketPlace