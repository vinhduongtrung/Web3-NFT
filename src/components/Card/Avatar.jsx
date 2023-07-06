import { styled } from 'styled-components'

const SAvatar = styled.div`
    height: ${props => props.radius};
    width: ${props => props.radius};
    border-radius: 50%;
    background-image: url(${props => props.cover});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`

const Avatar = ({radius, cover}) => {
  console.log(cover);
  return (
    <SAvatar radius = {radius} cover = {cover}/>
  )
}

export default Avatar