import React, {useState} from "react";
import styled, {css} from "styled-components";
import {Media} from "./Media";

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
  cursor: ${props => props.ableToOpen ? 'pointer' : 'inherit'};
`

const StyledOpen = styled.div`
  background-color: black;
  color: white;
  transform: rotateY(180deg);
`

const getAbleToOpen = (id) => {
  const currentDate = new Date()
  const december = 11

  if ((
    currentDate.getFullYear() === 2019 &&
    currentDate.getMonth() === december &&
    currentDate.getDate() >= id
  ) || (
    currentDate.getFullYear() > 2018
  )) {
    return true
  }

  return false
}

export const Window = ({id, setOpenWindows}) => {
  const openWindows = JSON.parse(localStorage.getItem('openWindows')) || []
  const open = openWindows.includes(id)
  const [play, setPlay] = useState(false)
  const ableToOpen = getAbleToOpen(id)

  const handleClick = () => {
    if (ableToOpen) {
      const openWindows = JSON.parse(localStorage.getItem('openWindows')) || []
      const newOpenWindows = openWindows.concat(id)
      localStorage.setItem('openWindows', JSON.stringify(newOpenWindows))
      setOpenWindows(newOpenWindows)
      setPlay(true);
    }
  }

  return (
    <StyledWindow onClick={handleClick}>
      <StyledInnerWindow open={open && ableToOpen}>
        <StyledClosed ableToOpen={ableToOpen}>
          {id}
        </StyledClosed>
        <StyledOpen>
          <Media id={id} play={play} />
        </StyledOpen>
      </StyledInnerWindow>
    </StyledWindow>
  )
}
