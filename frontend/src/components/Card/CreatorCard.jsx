import Avatar from './Avatar';

const CreatorCard = ({item}) => {
  const {profile, username, totalSales} = item;
  return (
    <div className='box'>
      <Avatar radius="60px" cover={profile}/>
      <p>{username}</p>
      <p>Total Sales: {totalSales} ETH</p>
    </div>
  )
}

export default CreatorCard