import TextHead from "../components/Text/TextHead"
import TextTitle from "../components/Text/TextTitle"
import CreatorContainer from "./CreatorContainer"
import { styled } from 'styled-components'

const STopCreator = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`
const TopCreators = () => {
  return (
    <STopCreator>
      <div>
        <TextHead text="Top Creators" />
        <TextTitle text="Checkout Top Rated Creators on the NFT Marketplace" />
      </div>
      <CreatorContainer />
    </STopCreator>
  )
}

export default TopCreators