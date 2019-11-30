import React, {useEffect} from "react";
import styled from "styled-components";
import dogs from "../res/dogs";

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
`

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border-width: 0;
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

export const Media = ({id, play}) => {
  const dog = dogs[id]
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
