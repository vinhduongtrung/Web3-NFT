import React from 'react'
import { styled } from 'styled-components'
import CardCollection from './CardCollection'
import best1 from "../assets/best-nft-1.jpg"
import extra11 from "../assets/extra-1.1.jpg"
import extra12 from "../assets/extra-1.2.jpg"
import best2 from "../assets/best-nft-2.jpg"
import extra21 from "../assets/extra-2.1.jpg"
import extra22 from "../assets/extra-2.2.jpg"
import best3 from "../assets/best-nft-3.jpg"
import extra31 from "../assets/extra-3.1.jpg"
import extra32 from "../assets/extra-3.2.jpg"
import mrfox from "../assets/mrfox.jpg"
import shroom from "../assets/shroom.jpg"
import robot from "../assets/robot.jpg"

const STrending = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  .text-head {
    line-height: 39.2px;
    color: #ffffff;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .text {
    color: #ffffff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
  
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
  gap: 15px;
  
  @media (min-width: 834px) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 30px;
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
const data = [
  {
    userInfo: {
      username: "MrFox",
      avatar: mrfox
    },
    collection: {
      name: "Dsgn Animals",
      total: 1025,
      best: {
        id: 1,
        url: best1
      },
      extra: [
        { url: extra11, id: 2 },
        { url: extra12, id: 3 },
      ]
    },
  },
  {
    userInfo: {
      username: "Shroomie",
      avatar: shroom
    },
    collection: {
      name: "Magic Mushrooms",
      total: 1025,
      best: {
        id: 4,
        url: best2
      },
      extra: [
        { url: extra21, id: 5 },
        { url: extra22, id: 6 },
      ]
    },
  },
  {
    userInfo: {
      username: "BeKind2Robots",
      avatar: robot
    },
    collection: {
      name: "Disco Machines",
      total: 1025,
      best: {
        id: 7,
        url: best3
      },
      extra: [
        { url: extra31, id: 8 },
        { url: extra32, id: 9 },
      ]
    },
  },
]

const TrendingCollection = () => {
  return (
    <STrending>
      <div className="top">
        <p className="text-head">Trending Collection</p>
        <p className="text">Checkout our weekly updated trending collection.</p>
      </div>
      <div className="mid">
        <Wrapper>
          {
            data.map((item) =>
              <CardCollection key={item.collection.name} item={item} />
            )
          }
        </Wrapper>
      </div>
    </STrending>
  )
}

export default TrendingCollection