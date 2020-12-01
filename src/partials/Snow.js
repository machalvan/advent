import React from "react";
import styled, {keyframes} from "styled-components";
import snowForeground from "../res/img/snow-foreground.png"
import snowMiddleground from "../res/img/snow-middleground.png"
import snowBackground from "../res/img/snow-background.png"

const snow = keyframes`
  0% {
    transform: translate3d(0, -100%, 0);
  }

  100% {
    transform: translate3d(0, 100%, 0);
  }
`;

const StyledSnow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  max-width: 100%;
  
  & > div {
    display: block;
    position: absolute;
    z-index: -2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    transform: translate3d(0, -100%, 0);
    animation: ${snow} linear infinite;
    
    :nth-child(1) {
      animation-delay: ${({ isFirstSnow }) => isFirstSnow ? "0s" : "-7.5s"};
    }
    
    :nth-child(2) {
      animation-delay: ${({ isFirstSnow }) => isFirstSnow ? "7.5s" : "0s"};
    }
  
    :nth-child(1), :nth-child(2) {
      background-image: url(${snowForeground});
      animation-duration: 15s;
    }
        
    :nth-child(3) {
      animation-delay: ${({ isFirstSnow }) => isFirstSnow ? "0s" : "-10s"};
    }
    
    :nth-child(4) {
      animation-delay: ${({ isFirstSnow }) => isFirstSnow ? "10s" : "0s"};
    }
    
    :nth-child(3), :nth-child(4) {
      background-image: url(${snowMiddleground});
      animation-duration: 20s;
    }
    
    :nth-child(5) {
      animation-delay: ${({ isFirstSnow }) => isFirstSnow ? "0s" : "-15s"};
    }
    
    :nth-child(6) {
      animation-delay: ${({ isFirstSnow }) => isFirstSnow ? "15s" : "0s"};
    }
    
    :nth-child(5), :nth-child(6) {
      background-image: url(${snowBackground});
      animation-duration: 30s;
    }
  }
`;

export const Snow = (props) => {
  return (
    <StyledSnow {...props}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </StyledSnow>
  )
}