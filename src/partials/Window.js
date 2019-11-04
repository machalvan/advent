import React from "react";
import styled from "styled-components";

const StyledWindow = styled.li`
  width: 100%;
  border: 1px solid white;
  color: white;
  
  & > div {
    margin-left: 10px;
    margin-top: 4px;
  }
`

export const Window = ({id}) => {
  return (
    <StyledWindow>
      <div>{id}</div>
    </StyledWindow>
  )
}