import { styled } from 'styled-components'
import { useEffect, useState } from "react"
import CategoryCard from "../components/Card/CategoryCard"
import useCategory from "../store/useCategory";

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
    const {data, fetchData} = useCategory();

    useEffect(() => {
      async function callApi() {
          await fetchData();
        }
      if(data.length === 0 ) {
        callApi() 
      }
    }, [])

    return (
        <Wrapper>
            {
                data.map((item) =>
                    <CategoryCard key={item.id} item={item} />
                )
            }
        </Wrapper>
    )
}

export default CategoryContainer