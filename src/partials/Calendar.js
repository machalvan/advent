import React from "react";
import styled, {css} from "styled-components";
import {Window} from "./Window";

const StyledCalendar = styled.div`
  max-width: 960px;
  margin: 20px auto; 
`

const StyledHeader = styled.h1`
  text-align: center;
  color: white;
  font-family: Arial, sans-serif;
  ${({ dark }) => dark && css`
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  `};
`

const StyledWindows = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  max-width: 1000px;
  gap: 1em;
  list-style: none;
  margin: 10px 20px 0;
  padding: 0;
`

export const Calendar = ({header, ...props}) => {
  return (
    <StyledCalendar>
      <StyledHeader dark={props.openWindows.length >= 20}>{header}</StyledHeader>
      <StyledWindows>
        {[...Array(24)].map((_, id) => <Window key={`window__${id}`} id={id} {...props} />)}
      </StyledWindows>
    </StyledCalendar>
  )
}
