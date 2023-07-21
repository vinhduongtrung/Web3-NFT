import { styled } from 'styled-components'
import { useEffect, useState } from "react"
import CategoryCard from "../components/Card/CategoryCard"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .box {
    display: grid;
    place-items: center;
    height: 100px;
    background-color: #3b3b3b;
    margin-block-end: 30px;
  }

  @media (min-width: 834px) {
    grid-template-columns: repeat(4, 1fr);
    .box {
        margin-inline-end: 30px;
        
        &:nth-child(4n){
            margin-inline-end: 0;
        }
    }
  }
  @media (max-width: 833px) {
    .box {
        margin-inline-end: 30px;
        &:nth-child(2n){
            margin-inline-end: 0;
        }
    }
  }
`

const CategoryContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getCategory = async () => {
            const data = [
                {
                    name: "Art",
                    icon: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/paintbrush-1@2x.svg"
                },
                {
                    name: "Collectibles",
                    icon: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/swatches-1@2x.svg"
                },
                {
                    name: "Music",
                    icon: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/musicnotes-1@2x.svg"
                },
                {
                    name: "Photography",
                    icon: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/camera-1@2x.svg"
                },
                {
                    name: "Video",
                    icon: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/videocamera-1@2x.svg"
                },
                {
                    name: "Utility",
                    icon: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/magicward-1@2x.svg"
                },
                {
                    name: "Sport",
                    icon: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/basketball-1@2x.svg"
                },
                {
                    name: "Virtual Worlds",
                    icon: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/planet-1@2x.svg"
                },
            ]
            setData(data)
        }
        getCategory()
    }, [])
    return (
        <Wrapper>
            {
                data.map((item) =>
                    <CategoryCard key={item.name} item={item} />
                )
            }
        </Wrapper>
    )
}

export default CategoryContainer