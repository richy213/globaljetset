import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const VideoPlayer = ({ src, poster }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [buttonOpacity, setButtonOpacity] = useState(1);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setButtonOpacity(1);
            } else {
                videoRef.current.play();
                setButtonOpacity(1);
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="w-full p-8 md:p-14">

            <div className="w-full relative" onMouseEnter={() => setButtonOpacity(1)} onMouseLeave={() => isPlaying && setButtonOpacity(0)}>
                <video
                    className="w-full"
                    ref={videoRef}
                    poster={poster}
                    onEnded={event => event.currentTarget.load()}
                >
                    <source src={src} type="video/mp4" />
                </video>

                <div
                    onClick={togglePlay}
                    style={{ opacity: buttonOpacity }}
                    className="w-full absolute flex justify-center top-[50%]  transform cursor-pointer transition-opacity duration-500">
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size='4x' color='white'/>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
