import { styled } from 'styled-components'
import { useEffect } from "react"
import CreatorCard from './Card/CreatorCard';
import useCreator from '../store/useCreator';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  .box {
    height: 100px;
    background-color: #3b3b3b;
    margin-block-end: 30px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    .box {
        margin-inline-end: 30px;
        &:nth-child(4n){
            margin-inline-end: 0;
        }
    }
  }
  @media(max-width: 1439px) {
    .box {
        margin-inline-end: 30px;
        &:nth-child(2n){
            margin-inline-end: 0;
        }
    }
    @media(max-width: 833px) {
        .box {
            margin-inline-end: 30px;
            &:nth-child(2n){
            margin-inline-end: 30px;
        }
        }
    }
  }
`

const CreatorContainer = () => {
    const { data, fetchData } = useCreator();

    useEffect(() => {
        async function callApi() {
            await fetchData();
        }
        if (data.length === 0) {
            callApi();
        }
    }, []);

    return (
        <Wrapper>
            {
                data.map((item) =>
                    <CreatorCard key={item.username} item={item} />
                )
            }
        </Wrapper>
    )
}

export default CreatorContainer