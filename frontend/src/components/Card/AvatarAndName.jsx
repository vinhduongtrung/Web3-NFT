import { styled } from 'styled-components'
import Avatar from './Avatar';
import { useNavigate } from 'react-router-dom';

const SUserInfo = styled.div`
    display: flex;
    gap: 12px;
`
export const AvatarAndName = ({avatar, name}) => {
    const navigate = useNavigate();
    return (
        <SUserInfo onClick = {()=>navigate("/artist-page")}>
            <Avatar radius="24px" cover={avatar}/>
            <span>{name}</span>
        </SUserInfo>
    )
}
