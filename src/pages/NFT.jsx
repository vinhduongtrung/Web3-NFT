import React from 'react'
import { useParams } from 'react-router-dom';

const NFT = () => {
  const { id } = useParams();
  return (
    <div>NFT {id}</div>
  )
}

export default NFT