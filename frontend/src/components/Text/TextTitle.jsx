import { styled } from 'styled-components'

const Wrapper = styled.p`
color: #ffffff;
font-size: 16px;
font-style: normal;
font-weight: 400;
`
const TextTitle = ({text}) => {
  return (
    <Wrapper>
        {text}
    </Wrapper>
  )
}

export default TextTitle