import React, {useState} from "react";
import styled from "styled-components";

const StyledWindow = styled.li`
  width: 100%;
  border: 1px solid white;
  color: white;
  
  & > div {
    margin-left: 10px;
    margin-top: 4px;
  }
  
  background: ${props => props.open ? 'black' : '#a52a2a'};
`

export const Window = ({id}) => {
  const [open, setOpen] = useState(false)

  const handleClick = event => {
    console.log('click');
    setOpen(true)
  }

  return (
    <StyledWindow onClick={handleClick} open={open}>
      <div>{id}</div>
    </StyledWindow>
  )
}
