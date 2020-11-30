import React from 'react';
import styled from "styled-components";
import snowGround from "../res/img/snow-ground.png"

const StyledSnowGround = styled.img`
  width: 100%;
  position: fixed;
  height: 200px;
  bottom: -125px;
  z-index: -1;
  animation: snowGround linear 30s;
`;

export const SnowGround = () => <StyledSnowGround src={snowGround} alt="Snowy ground" />
