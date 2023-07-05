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
    svg {
        width: 20px;
        height: 20px;
    }
`
const Button = ({logo, name, classname}) => {
  return (
    <SButton className={classname}>
        {logo}
        <span>{name}</span>
    </SButton>
  )
}

export default Button