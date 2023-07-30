import { styled } from 'styled-components'
import CollectionInfo from './CollectionInfo'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex: 1 1 330px;
  flex-direction: column;
  gap: 15px;
  .product-extra {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
    gap: 15px;
    cursor: pointer;
  }

.best-product {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 315px;
    margin:0 auto;
    margin-bottom: 20px;
    border-radius: 20px;
    cursor: pointer;
}
.child {
    height: 95px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;
}
.more {
  background-color: #a259ff;
  font-size: 16px;
  font-weight: 700;
  line-height: 22.4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.collection-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  .collection-name {
    line-height: 30.8px;
    color: #ffffff;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
  }
  .user-info {
    display: flex;
    gap: 12px;
  }
}
`
const CardCollection = ({ item }) => {
  const navigate = useNavigate();
  const clone = item.data.slice();
  clone.shift();
  
  return (
    <Container>
      {
        <div className='photo'>
          <div className="best-product"
            style={{ backgroundImage: `url(${item.data[0].image})` }}
            onClick={() => navigate(`/nftdetails/${item.username}/id/${item.data[0].id}`)}>
          </div>
          <div className="product-extra">
            {item && clone.map((e) =>
              <div className="child" key={e.id} style={{ backgroundImage: `url(${e.image})` }}
                onClick={() => navigate(`/nftdetails/${item.username}/id/${e.id}`)}>
              </div>
            )}
          </div>
        </div>
      }
      <CollectionInfo collection={item.data[0].name} avatar={item.data[0].image} name={item.username} />
    </Container>
  )
}

export default CardCollection