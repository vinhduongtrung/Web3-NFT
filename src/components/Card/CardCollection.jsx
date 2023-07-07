import { styled } from 'styled-components'
import CollectionInfo from './CollectionInfo'

const Container = styled.div`
  display: flex;
  flex: 1 1 330px;
  flex-direction: column;
  gap: 15px;
  .product-extra {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
    gap: 15px;
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
  return (
    <Container>
      <div className='photo'>
        <div className="best-product"
          style={{ backgroundImage: `url(${item.collection.best.url})` }}></div>
        <div className="product-extra">
          {item.collection.extra.map((e) =>
            <div className="child" key={e.id} style={{ backgroundImage: `url(${e.url})` }}></div>
          )}
          <div className="child more">{item.collection.total}+</div>
        </div>
      </div>
      <CollectionInfo collection={item.collection.name} avatar={item.userInfo.avatar} name={item.userInfo.username} />
    </Container>
  )
}

export default CardCollection