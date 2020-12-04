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

  /*
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.play !== nextProps.play) {
      nextProps.play && this.myRef.current && this.myRef.current.play()
      return true
    }

    return false
  }
  */

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("did update")

    function addSourceToVideo(element, src, type) {
      var source = document.createElement('source');
      source.src = src;
      source.type = type;
      element.appendChild(source);
    }

    const progressHandler = function(e) {
      if( video.duration ) {
        var percent = (video.buffered.end(0)/video.duration) * 100;
        console.log( percent );
        if( percent >= 100 ) {
          console.log("loaded!");
        }
        video.currentTime += 2;
        console.log("current", video.currentTime)
      }
    }

    const video = this.myRef.current
    const src = this.props.src //+ (this.props.open ? "#t=0.1" : "")
    addSourceToVideo( video, src, "video/mp4");
    video.addEventListener("progress", progressHandler, false);

    // console.log("vid", video.src)
    // console.log("buf2", video.buffered)
    // if (video.buffered.length > 0) {
    //   console.log("you are here", Math.round(video.buffered.end(0)), Math.round(video.seekable.end(0)))
    //   if (Math.round(video.buffered.end(0)) / Math.round(video.seekable.end(0)) === 1) {
    //     // Entire video is downloaded
    //     console.log("Entire video is downloaded");
    //     setTimeout(() => {
    //       console.log("World!");
    //
    //       if (prevProps.play !== this.props.play) {
    //         this.props.play && this.myRef.current.play()
    //         return true
    //       }
    //     }, 2000);
    //   }
    // }

    return false
  }

  render() {
    const src = this.props.src + (this.props.open ? "#t=0.1" : "")

    return (
      <StyledVideo ref={this.myRef} controls /*loop*/>
        {/*<source src={src} type="video/mp4"/>
        Your browser does not support the video tag.*/}
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
      return <Video2 play={play} src={src} open={open} beingOpened={beingOpened} setBeingOpened={setBeingOpened} />
    case 'youtube':
      return <YoutubeVideo play={play} src={src} open={open} />
    case 'image':
      return <Image src={src} />
    default:
      return <div>Not found</div>
  }
}
