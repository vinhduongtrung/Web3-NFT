import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const SAvatar = styled.div`
    height: ${props => props.radius};
    width: ${props => props.radius};
    border-radius: 50%;
    background-image: url(${props => props.cover});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
`

const Avatar = ({radius, cover, username}) => {
  const navigate = useNavigate();
  return (
    <SAvatar radius = {radius} cover = {cover} onClick = {()=>navigate(`/artist/${username}`)}/>
  )
}

export default Avatar