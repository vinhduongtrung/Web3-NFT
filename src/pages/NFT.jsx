import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const NFTPage = styled.div`
  
`

const NFT = () => {
  const { id } = useParams();
  return (
    <NFTPage>
      NFT {id}
    </NFTPage>
    
  )
}

export default NFT;