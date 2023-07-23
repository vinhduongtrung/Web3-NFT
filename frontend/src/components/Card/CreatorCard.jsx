import Avatar from './Avatar';

const CreatorCard = ({item}) => {
  const {cover, name, total_sale} = item;
  return (
    <div className='box'>
      <Avatar radius="60px" cover={cover}/>
      <p>{name}</p>
      <p>Total Sales: {total_sale} ETH</p>
    </div>
  )
}

export default CreatorCard