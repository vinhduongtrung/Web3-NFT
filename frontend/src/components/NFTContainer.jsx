import { styled } from 'styled-components'
import { useEffect, useState } from "react"
import NFTCard from './Card/NFTCard';
import useNftItem from "../store/nftItem";
import useUser from '../store/user';
import getMoreItem from '../store/getMore';

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

const NFTContainer = () => {
  const {data, fetchData} = getMoreItem();
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <Wrapper>
      {
        data.map((item) =>
          <NFTCard key={item.nftName} item={item} />
        )
      }
    </Wrapper>
  )
}

export default NFTContainer