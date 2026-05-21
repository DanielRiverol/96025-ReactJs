import { useState, useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();

    setIsPlaying(!isPlaying);
  };
  return (
    <div className='flex justify-center items-center min-h-screen p-5'>
      <div className='card w-full max-w-xl bg-base-100 shadow-xl border border-base-300'>
        <figure className='p-4'>
          <video ref={videoRef}>
            <source src='#' type='video/mp4' />
          </video>
          <div className='card-body items-center text-center'>
            <div className='card-actions m-3'>
              <button onClick={handlePlay}>Play</button>
              {/* cambiar el mensaje del boton */}
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default VideoPlayer;
