import styled from "styled-components";
import React from "react";
import {Window} from "./Window";

const StyledCalendar = styled.div`
  max-width: 960px;
  margin: 20px auto; 
`

const StyledHeader = styled.h1`
  text-align: center;
  color: white;
  font-family: Arial, sans-serif;
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

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
`

const windows = [
  {id: 1, content: <StyledIframe src="//www.youtube.com/embed/FKWwdQu6_ok?enablejsapi=1" frameBorder="0" id="video" />},
  {id: 2, content: 'open'},
  {id: 3, content: 'open'},
  {id: 4, content: 'open'},
  {id: 5, content: 'open'},
  {id: 6, content: 'open'},
  {id: 7, content: 'open'},
  {id: 8, content: 'open'},
  {id: 9, content: 'open'},
  {id: 10, content: 'open'},
  {id: 11, content: 'open'},
  {id: 12, content: 'open'},
  {id: 13, content: 'open'},
  {id: 14, content: 'open'},
  {id: 15, content: 'open'},
  {id: 16, content: 'open'},
  {id: 17, content: 'open'},
  {id: 18, content: 'open'},
  {id: 19, content: 'open'},
  {id: 20, content: 'open'},
  {id: 21, content: 'open'},
  {id: 22, content: 'open'},
  {id: 23, content: 'open'},
  {id: 24, content: 'open'},
]

export const Calendar = () => {
  return (
    <StyledCalendar>
      <StyledHeader>Advent</StyledHeader>
      <StyledWindows>
        {windows.map(window => <Window key={`window__${window.id}`} {...window} />)}
      </StyledWindows>
    </StyledCalendar>
  )
}
