import React from 'react'
import { styled } from 'styled-components'
import Card from './Card'

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
        <div className="image-head">
          <Card/>
        </div>
      </div>
    </STrending>
  )
}

export default TrendingCollection