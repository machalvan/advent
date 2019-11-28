import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {Window} from "./Window";
import dogs from "../res/dogs";

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

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
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
  src = 'https://www.youtube.com/embed/' + src + '?enablejsapi=1&loop=1&autoplay=' + (play ? 1 : 0) + '&playlist=' + src
  return <StyledIframe src={src} allow="autoplay; fullscreen" />
}

const Image = ({src}) => {
  return <StyledImg src={src} />
}

const Media = ({id, play}) => {
  const dog = dogs[id - 1]
  const {type, src} = dog

  switch (type) {
    case 'mp4':
      return <Video play={play} src={src} />
    case 'youtube':
      return <YoutubeVideo play={play} src={src} />
    case 'image':
      return <Image src={src} />
    default:
      return <div>Not found</div>
  }
}

const windows = [
  {id: 1, content: (play) => <Media id={1} play={play} />},
  {id: 2, content: (play) => <Media id={2} play={play} />},
  {id: 3, content: (play) => <Media id={3} play={play} />},
  {id: 4, content: (play) => <Media id={4} play={play} />},
  {id: 5, content: (play) => <Media id={5} play={play} />},
  {id: 6, content: (play) => <Media id={6} play={play} />},
  {id: 7, content: (play) => <Media id={7} play={play} />},
  {id: 8, content: (play) => <Media id={8} play={play} />},
  {id: 9, content: (play) => <Media id={9} play={play} />},
  {id: 10, content: (play) => <Media id={10} play={play} />},
  {id: 11, content: (play) => <Media id={11} play={play} />},
  {id: 12, content: (play) => <Media id={12} play={play} />},
  {id: 13, content: (play) => <Media id={13} play={play} />},
  {id: 14, content: (play) => <Media id={14} play={play} />},
  {id: 15, content: (play) => <Media id={15} play={play} />},
  {id: 16, content: (play) => <Media id={16} play={play} />},
  {id: 17, content: (play) => <Media id={17} play={play} />},
  {id: 18, content: (play) => <Media id={18} play={play} />},
  {id: 19, content: (play) => <Media id={19} play={play} />},
  {id: 20, content: (play) => <Media id={20} play={play} />},
  {id: 21, content: (play) => <Media id={21} play={play} />},
  {id: 22, content: (play) => <Media id={22} play={play} />},
  {id: 23, content: (play) => <Media id={23} play={play} />},
  {id: 24, content: (play) => <Media id={24} play={play} />},
]

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
        {windows.map(window => <Window key={`window__${window.id}`} setOpenWindows={setOpenWindows} {...window} />)}
      </StyledWindows>
    </StyledCalendar>
  )
}
