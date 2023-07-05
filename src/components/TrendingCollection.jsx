import React from 'react'
import { styled } from 'styled-components'

const STrending = styled.div`
  display: flex;
  flex-direction: column;
`
const TrendingCollection = () => {
  return (
    <STrending>
      <div className="top">
        <p className="text-head">Trending Collection</p>
        <p className="text-tail">Checkout our weekly updated trending collection.</p>
      </div>
      <div className="mid">
        <div className="image-head"></div>
      </div>
    </STrending>
  )
}

export default TrendingCollection