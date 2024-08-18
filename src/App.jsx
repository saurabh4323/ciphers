import React, { useState, useEffect, useRef } from "react";
import Cipher from "./Cipher";
import "./App.css";

const App = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play(); // Restart the video to play with sound
    }
  };

  return (
    <div>
      {showVideo ? (
        <div className="video-container">
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            onEnded={() => setShowVideo(false)}
          >
            <source src="hi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {isMuted && <button onClick={handleUnmute}></button>}
        </div>
      ) : (
        <div className="main-content">
          <Cipher />
        </div>
      )}
    </div>
  );
};

export default App;
