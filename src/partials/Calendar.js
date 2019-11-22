import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {Window} from "./Window";
import dogs from "../res/videos/dogs";

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

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
`

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
`

const Video = ({play, src}) => {
  const ref = React.createRef();
  useEffect(() => {
    play && ref.current.play()
  })

  return (
    <StyledVideo ref={ref} controls loop>
      <source src={src} type="video/mp4"/>
      Your browser does not support the video tag.
    </StyledVideo>
  )
}

const YoutubeVideo = ({play, src}) => {
  src = src + '?enablejsapi=1&autoplay=' + (play ? 1 : 0)
  return <StyledIframe src={src} controls loop allow="autoplay; fullscreen" />
}

const windows = [
  {id: 1, content: (play) => <Video play={play} src={dogs.dog1} />},
  {id: 2, content: (play) => <Video play={play} src={dogs.dog2} />},
  {id: 3, content: (play) => <Video play={play} src={dogs.dog3} />},
  {id: 4, content: (play) => <Video play={play} src={dogs.dog4} />},
  {id: 5, content: (play) => <Video play={play} src={dogs.dog5} />},
  {id: 6, content: (play) => <Video play={play} src={dogs.dog6} />},
  {id: 7, content: (play) => <Video play={play} src={dogs.dog7} />},
  {id: 8, content: (play) => <Video play={play} src={dogs.dog8} />},
  {id: 9, content: (play) => <Video play={play} src={dogs.dog9} />},
  {id: 10, content: (play) => <Video play={play} src={dogs.dog10} />},
  {id: 11, content: (play) => <Video play={play} src={dogs.dog11} />},
  {id: 12, content: (play) => <Video play={play} src={dogs.dog12} />},
  {id: 13, content: (play) => <Video play={play} src={dogs.dog13} />},
  {id: 14, content: (play) => <Video play={play} src={dogs.dog14} />},
  {id: 15, content: (play) => <Video play={play} src={dogs.dog15} />},
  {id: 16, content: (play) => <Video play={play} src={dogs.dog16} />},
  {id: 17, content: (play) => <Video play={play} src={dogs.dog17} />},
  {id: 18, content: (play) => <Video play={play} src={dogs.dog18} />},
  {id: 19, content: (play) => <Video play={play} src={dogs.dog19} />},
  {id: 20, content: (play) => <Video play={play} src={dogs.dog20} />},
  {id: 21, content: (play) => <Video play={play} src={dogs.dog21} />},
  {id: 22, content: (play) => <Video play={play} src={dogs.dog22} />},
  {id: 23, content: (play) => <YoutubeVideo play={play} src='https://www.youtube.com/embed/0zYW6NXnDOU' />},
  {id: 24, content: (play) => <Video play={play} src={dogs.dog24} />},
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
