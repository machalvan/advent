import styled from "styled-components";
import React from "react";

const StyledCalendar = styled.div`
  max-width: 960px;
  margin: 20px;
  flex: 1 1 0;
`

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  max-width: 1000px;
  gap: 1em;
  list-style: none;
  margin: 10px auto 0;
  padding: 0;
`

const StyledListItem = styled.li`
  width: 100%;
  border: 1px solid black;
`

export const Calendar = () => {
  return (
    <StyledCalendar>
      <div>Dog calendar</div>
      <StyledList>
        <StyledListItem>1</StyledListItem>
        <StyledListItem>2</StyledListItem>
        <StyledListItem>3</StyledListItem>
        <StyledListItem>4</StyledListItem>
        <StyledListItem>5</StyledListItem>
        <StyledListItem>6</StyledListItem>
      </StyledList>
    </StyledCalendar>
  )
}