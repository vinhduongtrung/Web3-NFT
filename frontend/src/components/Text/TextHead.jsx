import { styled } from 'styled-components'

const Wrapper = styled.p`
        line-height: 39.2px;
        color: #ffffff;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        margin-bottom: 10px;
`
const TextHead = ({text}) => {
  return (
    <Wrapper>
      {text}
    </Wrapper>
  )
}

export default TextHead