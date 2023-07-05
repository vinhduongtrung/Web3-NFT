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
import { styled } from 'styled-components'
const data = [
  {
    username: "MrFox",
    collection: "Dsgn Animals",
    best: best1,
    extra: [
      { item: extra11 },
      { item: extra12 },
      { total : 1025}
    ]
  },
  {
    username: "Shroomie",
    collection: "Magic Mushrooms",
    best: best2,
    extra: [
      { item: extra21 },
      { item: extra22 },
      { total : 1025}
    ]
  },
  {
    username: "BeKind2Robots",
    collection: "Disco Machines",
    best: best3,
    extra: [
      { item: extra31 },
      { item: extra32 },
      { total : 1025}
    ]
  },
]
const SCard = styled.div`
  .product-extra {
    display: flex;
    justify-content: space-between;
}

.best-product {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 375px;
    margin:0 auto;
    margin-bottom: 20px;
    border-radius: 20px;
}
.child {
    width: 80px;
    height: 80px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-radius: 20px;
}
.more {
  background-color: #a259ff;
  font-size: 16px;
  font-weight: 700;
  line-height: 22.4px;
}
`
const Card = () => {
  return (
    <SCard>
      {
        data.map((item) =>
        <>
          <div class="best-product" key={item.best} style={{backgroundImage: `url(${item.best})`}}>
          </div>
          <div class="product-extra">
              {item.extra.map((e)=>
                e.item ? <div class="child" style={{backgroundImage: `url(${e.item})`}}></div>
                :<div class="child more">{e.total}+</div>
              )}
          </div>
          <div>{item.collection}</div>
          <div>{item.username}</div>
        </>
        )
      }
    </SCard>
  )
}

export default Card