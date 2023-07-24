import React from 'react'
import { styled } from 'styled-components'

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
const Button = ({logo, name, classname, onClick}) => {
  return (
    <SButton className={classname} onClick={onClick}>
        {logo}
        <span>{name}</span>
    </SButton>
  )
}

export default Button