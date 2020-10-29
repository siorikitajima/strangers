import React, {useState} from 'react';
import Iframe from 'react-iframe';
import AudioPlayer from './AudioPlayer';
import { AudioPlayerProvider } from "react-use-audio-player"

import trackZero from '../Sounds/NumberZero-Prism.mp3';
import trackOne from '../Sounds/UntitledExistential.mp3';
import trackTwo from '../Sounds/NumberZero-Geodesic.mp3';

// import P5Wrapper from 'react-p5-wrapper';
// import SketchZero from './SketchZero';
// import SketchOne from './SketchOne';

const soothingData = [
    {id:0, 
      sketch:'Sin Orbit', 
      track:'Prism',
      url: '../Sounds/Soothing01.mp3'
    },
    {id:1, 
        sketch:'Eternal Moment', 
        track:'Untitled Existential',
        url: '../Sounds/Soothing02.mp3'
    },
    {id:2, 
        sketch:'Hasitate Wave', 
        track:'Geodesic',
        url: '../Sounds/Soothing03.mp3'
    }
]

function SoothingScreen(){
    const [sketch, setSketch] = useState(0);
    // const trackFile = soothingData[sketch].url;

    function TrackFile() {
        if (sketch === 0) {
          return <AudioPlayer file={trackZero}className="playButton"/>;
        } else if (sketch ===1) {
            return <AudioPlayer file={trackOne}className="playButton"/>;
        } else {
            return <AudioPlayer file={trackTwo}className="playButton"/>;
        }
      }
    // playZero = '../Sounds/NumberZero-Prism.mp3';
    // const playOne = '../Sounds/UntitledExistential.mp3';
    // const playTwo = '../Sounds/NumberZero-Geodesic.mp3';

        return(
            <div className="soothingScreen">
                <IFrameSketch/>

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
            if(sketch === 0) {
                return <Iframe url="https://siorikitajima.github.io/Test-Site/soothingMode/iframe-zero.html"
                width="100%"
                height = {window.innerHeight}
                display="initial"
                position="relative"
                frameBorder="none"
                styles={{margin: "0", border: "none"}}/>
            } else if(sketch === 1) {
                return <Iframe url="https://siorikitajima.github.io/Test-Site/soothingMode/iframe-one.html"
                width="100%"
                height = {window.innerHeight}
                display="initial"
                position="relative"
                frameBorder="none"
                styles={{margin: "0", border: "none"}}/>
            } else {
                return <Iframe url="https://siorikitajima.github.io/Test-Site/soothingMode/iframe-two.html"
                width="100%"
                height = {window.innerHeight}
                display="initial"
                position="relative"
                frameBorder="none"
                styles={{margin: "0", border: "none"}}/>
            }
        }        
    }
 

        // <div className="soothingScreen">
        //     <P5Wrapper 
        //     className="soothingModePanel"
        //     sketch={SketchZero}
        //     />
        //     <div className="soothingOption">
        //         <div className="trackWrapper">
        //             <div className="playButton"></div>
        //             <div className="trackInfo">
        //                 <h3>Number Zero</h3>
        //                 <p>Code by Siori Kitajima<br/> Music by Joseph Minadeo "Prism"</p>
        //             </div>
        //         </div>
        //         <div className="numberBtns">
        //             <div onClick={() => setSketch(0)}>0</div>
        //             <div onClick={() => setSketch(1)}>1</div>
        //             <div onClick={() => setSketch(2)}>2</div>
        //         </div>
        //         <div className="width400"></div>
        //     </div>
        //     <div className="soothingMobileTop numberBtns">
        //         <div onClick={props.sketchZero}>0</div>
        //         <div onClick={props.sketchOne}>1</div>
        //         <div onClick={props.sketchTwo}>2</div>
        //         <div className="playButton"></div>
        //     </div>
        //     <div className="soothingMobileBottom">
        //         <h3>Number Zero</h3>
        //         <p>Code by Siori Kitajima<br/> Music by Joseph Minadeo "Prism"</p>
        //     </div>
        // </div>


// iframe all method to preserve //
// function SoothingScreen(){
//     return(
//         <div className="soothingScreen">
//             <IFrameSize/>
//         </div>
//     );
// }

//     function IFrameSize() {
//         return <Iframe url="https://siorikitajima.github.io/Test-Site/soothingMode/"
//         width="100%"
//         height = {window.innerHeight}
//         display="initial"
//         position="relative"
//         frameBorder="none"
//         styles={{margin: "0", border: "none"}}/>
//     };

export default SoothingScreen;