import { styled } from 'styled-components'
import Avatar from './Avatar';
import { useNavigate } from 'react-router-dom';

const SUserInfo = styled.div`
    display: flex;
    gap: 12px;
    cursor: pointer;
`
export const AvatarAndName = ({avatar, name}) => {
    const navigate = useNavigate();
    return (
        <SUserInfo onClick = {()=>navigate(`/artist/${name}`)} >
            <Avatar radius="24px" cover={avatar}/>
            <span>{name}</span>
        </SUserInfo>
    )
}
