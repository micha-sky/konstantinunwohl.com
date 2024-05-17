// YouTubeVideo.js
import React from "react"

const YouTubeVideo = ({ videoId }) => (
  <div className="video-container aspect-w-16 aspect-h-9">
    <iframe
      className="aspect-content w-full"
      width={560}
      height={450}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allowFullScreen
    ></iframe>
  </div>
)

export default YouTubeVideo
