import React , {useEffect, useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Video = ({src, poster}) => {
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
        <div className="w-full">

            <div className="w-full relative" onMouseEnter={() => setButtonOpacity(1)} onMouseLeave={() => isPlaying && setButtonOpacity(0)}>
                <video
                    className="w-full"
                    ref={videoRef}
                    poster={poster}
                    autoPlay 
                    loop 
                    muted
                >
                    <source src={src} type="video/mp4" />
                </video>

                <div
                    onClick={togglePlay}
                    style={{ opacity: buttonOpacity }}
                    className="w-full absolute flex justify-center top-[50%]  transform cursor-pointer transition-opacity duration-500">
                </div>
            </div>
        </div>
    )
}

export default Video
