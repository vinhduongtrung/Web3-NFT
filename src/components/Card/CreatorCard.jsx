import { styled } from 'styled-components'
import Avatar from './Avatar';


const CreatorCard = ({item}) => {
  const {cover, name, total_sale} = item;
  return (
    <div className='box'>
      <Avatar radius="60px" cover={cover}/>
      <p>{name}</p>
      <p>{total_sale}</p>
    </div>
  )
}

export default CreatorCard