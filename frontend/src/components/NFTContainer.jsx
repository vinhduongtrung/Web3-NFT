import { styled } from 'styled-components'
import { useEffect } from "react"
import NFTCard from './Card/NFTCard';
import useGetMore from '../store/useGetMore';
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));

  @media (min-width: 834px) {
  grid-template-columns: repeat(2, minmax(330px, 1fr));
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

const NFTContainer = () => {
  const { data, fetchData } = useGetMore();

  useEffect(() => {
    const callApi = async () => {
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
          <NFTCard
          key={item.id}
          item={item}
          username={item.username}
          profile = {item.profilePicture}/>
        )
      }
    </Wrapper>
  )
}

export default NFTContainer