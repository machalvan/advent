import React, {useState} from "react";
import styled, {css} from "styled-components";

const StyledWindow = styled.li`
  width: 100%;
  color: white;
  transition-property: transform;
  transition-duration: 2s;
  transition-timing-function: ease-in-out;  
`

const StyledInnerWindow = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 2s;
  transform-style: preserve-3d;
  border: 1px solid white;
  
  ${props => props.open && css`
    transform: rotateY(180deg);
  `}
  
  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
`

const StyledClosed = styled.div`
  padding-left: 10px;
  padding-top: 5px;
  cursor: pointer;
`

const StyledOpen = styled.div`
  background-color: black;
  color: white;
  transform: rotateY(180deg);
`

export const Window = ({id, content}) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  return (
    <StyledWindow onClick={handleClick}>
      <StyledInnerWindow open={open}>
        <StyledClosed>
          {id}
        </StyledClosed>
        <StyledOpen>
          {content(open)}
        </StyledOpen>
      </StyledInnerWindow>
    </StyledWindow>
  )
}
