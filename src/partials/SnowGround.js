import React from 'react';
import styled from "styled-components";
import snowGround from "../res/img/snow-ground.png"

const StyledSnowGround = styled.img`
  width: 100%;
  position: fixed;
  bottom: -1px;
  z-index: -1;
  height: ${({ opened }) => `calc(130vh / 24 * ${(opened)} + 3px)`};
  transition: height 20s ease ${({ opened }) => opened === 1 ? "10s" : "0s"};
`;

export const SnowGround = ({ openWindows }) => (
  <StyledSnowGround src={snowGround} alt="Snowy ground" opened={openWindows.length} />
)
