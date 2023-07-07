import { styled } from 'styled-components'
import CardCollection from './Card/CardCollection'
import TextHead from "./Text/TextHead"
import TextTitle from "./Text/TextTitle"

const STrending = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  
  @media (min-width: 834px) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
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
      avatar: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder@2x.png"
    },
    collection: {
      name: "Dsgn Animals",
      total: 1025,
      best: {
        id: 1,
        url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-1@2x.png"
      },
      extra: [
        { url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder@2x.png", id: 2 },
        { url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-1@2x.png", id: 3 },
      ]
    },
  },
  {
    userInfo: {
      username: "Shroomie",
      avatar: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png"
    },
    collection: {
      name: "Magic Mushrooms",
      total: 1025,
      best: {
        id: 4,
        url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder@2x.png"
      },
      extra: [
        { url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-2@2x.png", id: 5 },
        { url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-3@2x.png", id: 6 },
      ]
    },
  },
  {
    userInfo: {
      username: "BeKind2Robots",
      avatar: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-54@2x.png"
    },
    collection: {
      name: "Disco Machines",
      total: 1025,
      best: {
        id: 7,
        url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-5@2x.png"
      },
      extra: [
        { url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-10@2x.png", id: 8 },
        { url: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-11@2x.png", id: 9 },
      ]
    },
  },
]

const Trending = () => {
  return (
    <div className="trending">
      <STrending>
        <div className="top">
          <TextHead text="Trending Collection" />
          <TextTitle text="Checkout our weekly updated trending collection" />
        </div>
        <Wrapper>
          {
            data.map((item) =>
              <CardCollection key={item.collection.name} item={item} />
            )
          }
        </Wrapper>
      </STrending>
    </div>
  )
}

export default Trending