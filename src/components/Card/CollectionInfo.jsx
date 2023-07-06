import { styled } from 'styled-components'
import { AvatarAndName } from './AvatarAndName'

const SCollection = styled.div`
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
`
const CollectionInfo = ({collection, avatar, name}) => {
  return (
    <SCollection>
        <div className="collection-name">{collection}</div>
        <AvatarAndName avatar = {avatar} name={name}/>
    </SCollection>
  )
}

export default CollectionInfo