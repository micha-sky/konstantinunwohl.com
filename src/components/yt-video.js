// YouTubeVideo.js
import React from "react"

const YouTubeVideo = ({ videoId }) => (
  <iframe
    className="w-full aspect-video"
    src={`https://www.youtube.com/embed/${videoId}`}
    title="YouTube video player"
    allowFullScreen
  ></iframe>
)

export default YouTubeVideo
