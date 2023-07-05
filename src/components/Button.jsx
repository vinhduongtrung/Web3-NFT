import React from 'react'
import { styled } from 'styled-components'
import { ReactComponent as User } from "../assets/user.svg";
const SButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    border-radius: 20px;
    gap: 12px;
    width: ${props=>props.w};
    height: ${props => props.h};
    padding: ${props => props.padding};
    background-color: ${props => props.bg};
    svg {
        width: 20px;
        height: 20px;
    }
`
const Button = ({logo, name, w, h , padding, bg}) => {
  return (
    <SButton w={w} h={h} padding={padding} bg={bg}>
        {logo}
        <span>{name}</span>
    </SButton>
  )
}

export default Button