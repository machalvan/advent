import React, {useState} from "react";
import styled, {css} from "styled-components";
import {Media} from "./Media";

const StyledWindow = styled.li`
  width: 100%;
  height: 100%;
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
  
  ${props => props.open && css`
    transform: rotateY(180deg);
  `}
`

const StyledClosed = styled.div`
  background: #a52a2a;
  cursor: ${props => props.ableToOpen ? 'pointer' : 'inherit'};
  border: 1px solid white;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  
  & > div {
    margin-left: 10px;
    margin-top: 6px;
  }
`

const StyledOpen = styled.div`
  background-color: black;
  color: white;
  transform: rotateY(180deg);
  border: 1px solid white;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-left: -2px;
  backface-visibility: hidden;
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
          <div>{id + 1}</div>
        </StyledClosed>
        <StyledOpen>
          <Media id={id} play={play} />
        </StyledOpen>
      </StyledInnerWindow>
    </StyledWindow>
  )
}
