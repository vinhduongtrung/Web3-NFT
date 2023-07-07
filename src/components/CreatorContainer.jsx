import { styled } from 'styled-components'
import { useEffect, useState } from "react"
import CreatorCard from './Card/CreatorCard';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  .box {
    height: 100px;
    background-color: red;
    margin-block-end: 30px;
  }
`

const CreatorContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getCreators = async () => {
            const data = [
                {
                    cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png",
                    name: "KeepiTreal",
                    total_sale: "34.53"
                },
                {
                    cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-99@2x.png",
                    name: "Digilab",
                    total_sale: "34.53"
                },
                {
                    cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-100@2x.png",
                    name: "Gravityone",
                    total_sale: "34.53"
                },
                {
                    cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-101@2x.png",
                    name: "Juanie",
                    total_sale: "34.53"
                },
                {
                    cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-102@2x.png",
                    name: "Bluewhale",
                    total_sale: "34.53"
                },
                {
                    cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-1@2x.png",
                    name: "Mr Fox",
                    total_sale: "34.53"
                },
                {
                    cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-103@2x.png",
                    name: "Shroomie",
                    total_sale: "34.53"
                },
                {
                    cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-104@2x.png",
                    name: "Robotica",
                    total_sale: "34.53"
                },
                {
                    cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-105@2x.png",
                    name: "Rustyrobot",
                    total_sale: "34.53"
                },
                {
                    cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-106@2x.png",
                    name: "Animakid",
                    total_sale: "34.53"
                },
                {
                    cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-107@2x.png",
                    name: "Dotgu",
                    total_sale: "34.53"
                },
                {
                    cover: "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-108@2x.png",
                    name: "Ghiblier",
                    total_sale: "34.53"
                },
            ]
            setData(data)
        }
        getCreators()
    }, [])
    return (
        <Wrapper>
            {
                data.map((item) =>
                    <CreatorCard key={item.name} item={item} />
                )
            }
        </Wrapper>
    )
}

export default CreatorContainer