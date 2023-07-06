import React from 'react'
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
import { styled } from 'styled-components'
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
const CardContainer = styled.div`
  .product-extra {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
    gap: 15px;
}

.best-product {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 315px;
    margin:0 auto;
    margin-bottom: 20px;
    border-radius: 20px;
}
.child {
    height: 95px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
}
.more {
  background-color: #a259ff;
  font-size: 16px;
  font-weight: 700;
  line-height: 22.4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.collection-info {
  display: flex;
  flex-direction: column;
  .collection-name {
    line-height: 30.8px;
    color: #ffffff;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
  }
  .user-info {
    display: flex;
    gap: 12px;
  }
}
@media (min-width: 834px) {
  .child {
    height: 100px;
  }
}
`
const Card = () => {
  return (
    <CardContainer>
      {
        data.map((item) =>
          <CardCollection key={item.collection.name} item={item}/>
        )
      }
    </CardContainer>
  )
}
const CardCollection = ({item}) => {
  return (
    <>
      <div className='photo'>
        <div className="best-product"
          style={{ backgroundImage: `url(${item.collection.best.url})` }}></div>
        <div className="product-extra">
          {item.collection.extra.map((e) =>
            <div className="child" key={e.id} style={{ backgroundImage: `url(${e.url})` }}></div>
          )}
          <div className="child more">{item.collection.total}+</div>
        </div>
      </div>
      <div className="collection-info">
        <div className="collection-name">{item.collection.name}</div>
        <div className="user-info">
          <img src={item.userInfo.avatar} />
          <span>{item.userInfo.username}</span>
        </div>
      </div>
    </>
  )
}

export default Card