import styled from "styled-components";
import React, {useEffect, useState} from "react";
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

export const Calendar = () => {
  const [openWindows, setOpenWindows] = useState(localStorage.getItem('openWindows') || [])
  const [header, setHeader] = useState(openWindows.length > 0 ? 'Advent of dogs' : 'Advent')

  useEffect(() => {
    if (openWindows.length > 0) {
      setHeader('Advent of dogs')
    }
  }, [openWindows])

  return (
    <StyledCalendar>
      <StyledHeader>{header}</StyledHeader>
      <StyledWindows>
        {[...Array(24)].map((_, id) => <Window key={`window__${id}`} id={id} setOpenWindows={setOpenWindows} />)}
      </StyledWindows>
    </StyledCalendar>
  )
}
