import React, {useState} from 'react';
import Iframe from 'react-iframe';
import AudioPlayer from '../Components/AudioPlayer';
import { AudioPlayerProvider } from "react-use-audio-player";

import trackZero from '../Sounds/Soothing01.mp3';
import trackOne from '../Sounds/Soothing02.mp3';
import trackTwo from '../Sounds/Soothing03.mp3';
import { isIOS } from "react-device-detect";



const soothingData = [
    {id:0, 
      sketch:'Sine Orbit', 
      track:'Prism'
    },
    {id:1, 
        sketch:'Eternal Moment', 
        track:'Untitled Existential'
    },
    {id:2, 
        sketch:'Pastoral Waves', 
        track:'Geodesic'
    }
]

function Breathe(){
    const [sketch, setSketch] = useState(0);
    const [count, setCount] = useState(0);

    function TrackFile() {
        if (sketch === 0) {
          return <AudioPlayer file={trackZero}className="playButton"/>;
        } else if (sketch ===1) {
            return <AudioPlayer file={trackOne}className="playButton"/>;
        } else {
            return <AudioPlayer file={trackTwo}className="playButton"/>;
        }
      }

        return(
            <div className="soothingScreen">
                <IFrameSketch key={count} onLoad={() => setCount(count + 1)}/>

            <div className="soothingOption">
                <div className="trackWrapper">
                <AudioPlayerProvider>
                    <TrackFile />
                </AudioPlayerProvider>
                    {/* <div className="playButton"></div> */}
                    <div className="trackInfo">
                        <h3>{soothingData[sketch].sketch}</h3>
                        <p className="soothingCredit">Code by Siori Kitajima<br/> Music by Joseph Minadeo "{soothingData[sketch].track}"</p>
                    </div>
                </div>
                <div className="numberBtns">
                    <div onClick={() => setSketch(0)}>0</div>
                    <div onClick={() => setSketch(1)}>1</div>
                    <div onClick={() => setSketch(2)}>2</div>
                </div>
                <div className="width400"></div>
            </div>
            <div className="soothingMobileTop numberBtns">
                <div onClick={() => setSketch(0)}>0</div>
                <div onClick={() => setSketch(1)}>1</div>
                <div onClick={() => setSketch(2)}>2</div>
                <AudioPlayerProvider>
                    <TrackFile />
                </AudioPlayerProvider>
            </div>
            <div className="soothingMobileBottom">
                <h3>{soothingData[sketch].sketch}</h3>
                <p className="soothingCredit">Code by Siori Kitajima<br/> Music by Joseph Minadeo "{soothingData[sketch].track}"</p>
            </div>

        </div>
        );

        function IFrameSketch() {
            if(sketch === 0 && isIOS) {
                return <Iframe url="https://strangersinmyhead.info/breathe-sketches/zero-iOS/"
                width="100%"
                height = {window.innerHeight}
                display="initial"
                position="relative"
                frameBorder="none"
                styles={{margin: "0", border: "none"}}/>
            } else if(sketch === 0 && !isIOS) {
                return <Iframe url="https://strangersinmyhead.info/breathe-sketches/zero/"
                width="100%"
                height = {window.innerHeight}
                display="initial"
                position="relative"
                frameBorder="none"
                styles={{margin: "0", border: "none"}}/>
            } else if(sketch === 1) {
                return <Iframe url="https://strangersinmyhead.info/breathe-sketches/one/"
                width="100%"
                height = {window.innerHeight}
                display="initial"
                position="relative"
                frameBorder="none"
                styles={{margin: "0", border: "none"}}/>
            } else {
                return <Iframe url="https://strangersinmyhead.info/breathe-sketches/two/"
                width="100%"
                height = {window.innerHeight}
                display="initial"
                position="relative"
                frameBorder="none"
                styles={{margin: "0", border: "none"}}/>
            }
        }        
    }

export default Breathe;