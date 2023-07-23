import { styled } from 'styled-components'
import CollectionInfo from "./CollectionInfo"

const Container = styled.div`
  display: flex;
  flex-direction: column;
.cover {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 315px;
    margin:0 auto;
    margin-bottom: 20px;
    border-radius: 20px;
  }
  .price-info {
    display: flex;
    justify-content: flex-start;
    gap: 50px;
  }
`
const NFTCard = ({item}) => {
    const {name, avatar, artist, price, bid, cover} = item;
    return (
        <Container>
            <div className="cover" style={{ backgroundImage: `url(${cover})`}}></div>
            <div className="info">
              <CollectionInfo collection={name} avatar={avatar} name={artist}/>
                <div className="price-info">
                    <div className="price">{price} ETH</div>
                    <div className="bid">{bid} wETH</div>
                </div>
            </div>
        </Container>
      )
}

export default NFTCard