
const CategoryCard = ({item}) => {
  const {cover, name} = item;
  return (
    <div className='box'>
      {/* <Avatar radius="60px" cover={cover}/> */}
      <p>{name}</p>
    </div>
  )
}

export default CategoryCard