import { styled } from 'styled-components'
import Avatar from './Avatar';

const SUserInfo = styled.div`
    display: flex;
    gap: 12px;
`
export const AvatarAndName = ({avatar, name}) => {
    return (
        <SUserInfo>
            <Avatar radius="24px" cover={avatar}/>
            <span>{name}</span>
        </SUserInfo>
    )
}
