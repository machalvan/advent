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
  cursor: ${props => props.ableToOpen ? 'pointer' : 'inherit'};
`

const StyledOpen = styled.div`
  background-color: black;
  color: white;
  transform: rotateY(180deg);
`

const getAbleToOpen = (id) => {
  const currentDate = new Date()
  console.log(currentDate, currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  console.log(currentDate.toLocaleDateString(), currentDate.toLocaleString());

  if (
    currentDate.getFullYear() === 2019 &&
    currentDate.getMonth() === 10 &&    // 11 = december
    currentDate.getDate() >= id
  ) {
    console.log('inside');
    return true
  }

  return false
}

export const Window = ({id, content}) => {
  const windows = JSON.parse(localStorage.getItem('windows'))
  const open = windows ? windows[id] : false
  const [play, setPlay] = useState(false)
  const ableToOpen = getAbleToOpen(id)

  const handleClick = () => {
    setPlay(true)
    const windows = JSON.parse(localStorage.getItem('windows')) || {};
    console.log(windows);

    const newWindows = {
      ...windows,
      [id]: true,
    }

    localStorage.setItem('windows', JSON.stringify(newWindows))
  }

  return (
    <StyledWindow onClick={handleClick}>
      <StyledInnerWindow open={open && ableToOpen}>
        <StyledClosed ableToOpen={ableToOpen}>
          {id}
        </StyledClosed>
        <StyledOpen>
          {content(play)}
        </StyledOpen>
      </StyledInnerWindow>
    </StyledWindow>
  )
}
