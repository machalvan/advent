import React from 'react';
import styled from "styled-components";

const StyledAttribution = styled.div`
  text-align: center;
  color: white;
  font-size: 10px;
  margin-bottom: 6px;
`;

export const Attribution = () => (
  <StyledAttribution>
    Icons made by
    {" "}
    <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
    {" "}
    from
    {" "}
    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
  </StyledAttribution>
)