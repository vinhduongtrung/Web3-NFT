
const CategoryCard = ({item}) => {
  const {id,name,icon,cover} = item;
  return (
    <div className='box'>
      {/* <Avatar radius="60px" cover={cover}/> */}
      <p>{name}</p>
    </div>
  )
}

export default CategoryCard