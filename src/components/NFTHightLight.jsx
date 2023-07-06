import { styled } from 'styled-components'
import { useEffect, useState } from "react"
import NFTCard from './Card/NFTCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const NFTHightLight = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getNFT = async () => {
      const data = [
        {
          id: 1,
          name: "Dsgn Animals",
          avatar: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-59@2x.png",
          artist: "MoonDancer",
          price: 1.63,
          bid: 0.33,
          cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-62@2x.png"
        },
        {
          id: 2,
          name: "Life On Edena",
          avatar: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png",
          artist: "NebulaKid",
          price: 1.63,
          bid: 0.33,
          cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-63@2x.png"
        },
        {
          id: 3,
          name: "Astrofiction",
          avatar: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-57@2x.png",
          artist: "SpaceOne",
          price: 1.63,
          bid: 0.33,
          cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-64@2x.png"
        },
      ]
      setData(data)
    }
    getNFT()
  }, [])
  return (
    <Wrapper>
      {
        data.map((item) =>
          <NFTCard key={item.id} item={item} />
        )
      }
    </Wrapper>
  )
}

export default NFTHightLight