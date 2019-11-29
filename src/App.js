import React from 'react';
import {Calendar} from "./partials/Calendar";
import styled from "styled-components";

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`

function App() {
  return (
    <StyledApp>
      <Calendar/>
      <div className="snow-container">
        <div className="snow foreground"/>
        <div className="snow foreground layered"/>
        <div className="snow middleground"/>
        <div className="snow middleground layered"/>
        <div className="snow background"/>
        <div className="snow background layered"/>
      </div>
    </StyledApp>
  )
}

export default App;