import React, {Component, useEffect} from "react";
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

  componentDidMount() {
    this.props.setBeingOpened(false)
  }

  render() {
    const src = this.props.src + (this.props.open && !this.props.beingOpened ? "#t=0.1" : "")

    return (
      <StyledVideo ref={this.myRef} controls preload="auto">
        <source src={src} type="video/mp4"/>
        Your browser does not support the video tag.
      </StyledVideo>
    )
  }
}

const Video2 = ({src, play, beingOpened, setBeingOpened}) => {
  const myRef = React.createRef();

  useEffect(() => {
    const myVid = myRef.current

    if (!myVid) return
    if (!beingOpened) return
    setBeingOpened(false)

    const req = new XMLHttpRequest();
    req.open('GET', src, true);
    req.responseType = 'blob';

    req.onload = function() {
      // Onload is triggered even on 404
      // so we need to check the status code
      if (this.status === 200) {
        const videoBlob = this.response;
        // Video is now downloaded
        // and we can set it as source on the video element
        myVid.src = URL.createObjectURL(videoBlob); // IE10+
        myVid.setAttribute("controls","controls")
        play && myVid.play()
      }
    }

    req.onerror = function() {
      console.log("ERROR")
    }

    req.send();
  }, [myRef])

  return (
    <StyledVideo ref={myRef} /*loop*/>
      <source src={src} type="video/mp4"/>
        Your browser does not support the video tag.
    </StyledVideo>
  )
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

export const Media = ({id, play, open, beingOpened, setBeingOpened}) => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const dog = dogs[currentYear][id]
  const {type, src} = dog

  switch (type) {
    case 'mp4':
      return <Video play={play} src={src} open={open} beingOpened={beingOpened} setBeingOpened={setBeingOpened} />
    case 'youtube':
      return <YoutubeVideo play={play} src={src} open={open} />
    case 'image':
      return <Image src={src} />
    default:
      return <div>Not found</div>
  }
}
