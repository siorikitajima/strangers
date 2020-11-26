import React from "react";
import { useAudioPlayer } from "react-use-audio-player";
import PlayBtn from '../Images/Play_btn.svg';
import PauseBtn from '../Images/Pause_btn.svg';

const AudioPlayer = ({ file }) => {
    const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
        src: file,
        format: "mp3",
        loop: true,
        autoplay: false
        })
 
    if (!ready && !loading) return <div className="audio-msg">No audio to play</div>
    if (loading) return <div className="audio-msg">Loading audio</div>
 
    return (
            <div onClick={togglePlayPause} className="playButton">
                <img src={playing? PauseBtn : PlayBtn} alt="Audio button"/>
            </div>
    )
}

export default AudioPlayer;