import { styled } from 'styled-components'
import TextHead from './Text/TextHead'
import CategoryContainer from './CategoryContainer'
const SCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`
const Category = () => {
  return (
    <div className="category">
      <SCategory>
        <div>
          <TextHead text="Browse Categories" />
        </div>
        <CategoryContainer />
      </SCategory>
    </div>
  )
}

export default Category