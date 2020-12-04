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
  const december = 11

  return (
    currentDate.getMonth() === december &&
    currentDate.getDate() >= windowNumber
  ) || (
    currentDate.getMonth() < december - 1
  );
}

export const Window = ({id, openWindows, setOpenWindows}) => {
  const currentYear = new Date().getFullYear()
  const windowNumber = id + 1
  const open = openWindows.includes(windowNumber)
  const [play, setPlay] = useState(false)
  const [beingOpened, setBeingOpened] = useState(false)
  const ableToOpen = getAbleToOpen(windowNumber)

  const handleClick = () => {
    if (ableToOpen) {
      setBeingOpened(true)
      setPlay(true);

      if (!openWindows.includes(windowNumber)) {
        const newOpenWindows = openWindows.concat(windowNumber)
        localStorage.setItem(`openWindows.${currentYear}`, JSON.stringify(newOpenWindows));
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
          <Media id={id} play={play} open={open} beingOpened={beingOpened} setBeingOpened={setBeingOpened} />
        </StyledOpen>
      </StyledInnerWindow>
    </StyledWindow>
  )
}
