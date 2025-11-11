import React, { useEffect, useRef } from 'react';

interface OpeningVideoProps {
  onVideoEnd: () => void;
}

const OpeningVideo: React.FC<OpeningVideoProps> = ({ onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    let fallbackTimer: NodeJS.Timeout;

    const handleVideoEnd = () => {
      clearTimeout(fallbackTimer);
      onVideoEnd();
    };

    if (video) {
      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('error', handleVideoEnd);

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Video play failed:", error);
          handleVideoEnd();
        });
      }

      // Fallback in case 'ended' event doesn't fire
      fallbackTimer = setTimeout(handleVideoEnd, 10000); // 10 second fallback
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
        video.removeEventListener('error', handleVideoEnd);
        clearTimeout(fallbackTimer);
      }
    };
  }, [onVideoEnd]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <video
        ref={videoRef}
        src="/videos/opening-bg.mp4"
        muted
        playsInline
        autoPlay
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default OpeningVideo;
