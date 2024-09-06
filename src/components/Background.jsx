import React from "react";

const BackgroundVideo = () => {
  const videoRef = React.useRef(null);

  const handleMouseOver = () => {
    videoRef.current.play();
  };

  const handleMouseOut = () => {
    videoRef.current.pause();
  };

  return (
    <div
      className="video-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <video
        ref={videoRef}
        className="background-video"
        muted
        loop
        playsInline
      >
        <source src="your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
