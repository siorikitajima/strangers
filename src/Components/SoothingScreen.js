import React, {useState} from 'react';
import Iframe from 'react-iframe';

// import P5Wrapper from 'react-p5-wrapper';
// import SketchZero from './SketchZero';
// import SketchOne from './SketchOne';


// const soothingData = [
//     {id:0, 
//       sketch:'SketchZero', 
//       track:'Prism'
//     },
//     {id:1, 
//         sketch:'SketchOne', 
//         track:'Track2'
//     },
//     {id:2, 
//         sketch:'SketchTwo', 
//         track:'Track3'
//     }
// ]

function SoothingScreen(){
        return(
            <div className="soothingScreen">
                <IFrameSize/>
            </div>
        );
    }
    // const [sketch, setSketch] = useState(0);
    // const sketchLink = soothingData[sketch].sketch;
    // console.log(sketchLink);

        function IFrameSize() {
            return <Iframe url="https://siorikitajima.github.io/Test-Site/soothingMode/"
            width="100%"
            height = {window.innerHeight}
            display="initial"
            position="relative"
            frameBorder="none"
            styles={{margin: "0", border: "none"}}/>
        };

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

export default SoothingScreen;