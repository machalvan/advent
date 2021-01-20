import React, {Component} from "react";
import styled from "styled-components";
import dogs from "../dogs";

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

class Video extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.play !== this.props.play) {
      this.props.play && this.myRef.current.play()
      return true
    }

    return false
  }

  render() {
    const src = this.props.src + (this.props.open ? "#t=0.1" : "")

    return (
      <StyledVideo ref={this.myRef} controls /*loop*/>
        <source src={src} type="video/mp4"/>
        Your browser does not support the video tag.
      </StyledVideo>
    )
  }
}

const YoutubeVideo = ({play, src, open}) => {
  return (play || open) && (
    <StyledIframe
      src={`https://www.youtube.com/embed/${src}?enablejsapi=1&autoplay=${play ? 1 : 0}&playlist=${src}`}
      allow="autoplay; fullscreen"
    />
  )
}

const Image = ({src}) => {
  return <StyledImg src={src} />
}

export const Media = ({id, play, open}) => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const dog = dogs[currentYear] ? dogs[currentYear][id] : {}
  const {type, src} = dog 

  switch (type) {
    case 'mp4':
      return <Video play={play} src={src} open={open} />
    case 'youtube':
      return <YoutubeVideo play={play} src={src} open={open} />
    case 'image':
      return <Image src={src} />
    default:
      return <div>Not found</div>
  }
}
