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
  background: #bf2224;
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

const getAbleToOpen = (windowNumber) => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear() -1
  const december = 11

  return (
    currentDate.getFullYear() === currentYear &&
    currentDate.getMonth() === december &&
    currentDate.getDate() >= windowNumber
  ) || (
    currentDate.getFullYear() > currentYear
  );
}

export const Window = ({id, setOpenWindows}) => {
  const openWindows = JSON.parse(localStorage.getItem('openWindows')) || []
  const windowNumber = id + 1
  const open = openWindows.includes(windowNumber)
  const [play, setPlay] = useState(false)
  const ableToOpen = getAbleToOpen(windowNumber)

  const handleClick = () => {
    if (ableToOpen) {
      setPlay(true);
      const openWindows = JSON.parse(localStorage.getItem('openWindows')) || []

      if (!openWindows.includes(windowNumber)) {
        const newOpenWindows = openWindows.concat(windowNumber)
        localStorage.setItem('openWindows', JSON.stringify(newOpenWindows));
        setOpenWindows(newOpenWindows)
      }
    }
  }

  return (
    <StyledWindow onClick={handleClick}>
      <StyledInnerWindow open={open && ableToOpen}>
        <StyledClosed ableToOpen={ableToOpen}>
          <div>{windowNumber}</div>
        </StyledClosed>
        <StyledOpen>
          <Media id={id} play={play} open={open} />
        </StyledOpen>
      </StyledInnerWindow>
    </StyledWindow>
  )
}
