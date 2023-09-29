import React from "react";
import ReactPlayer from "react-player/youtube";

function Video() {
  return (
    <div>
      <ReactPlayer url="https://youtu.be/ds8qIIxoj1U" 
      controls={true}
      />
    </div>
  );
}

export default Video;
