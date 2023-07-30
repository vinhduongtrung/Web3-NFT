import NFTContainer from "./NFTContainer"
import TextHead from "./Text/TextHead"
import TextTitle from "./Text/TextTitle"
import { styled } from 'styled-components'

const SDiscover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Discover = () => {
  return (
    <SDiscover>
      <div>
        <TextHead text="Discover More Nfts" />
        <TextTitle text="Explore New Trending Nfts" />
      </div>
      <NFTContainer/>
    </SDiscover>
  )
}

export default Discover