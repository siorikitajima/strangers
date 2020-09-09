import React from 'react';

function SoothingOption(props){
    return(
        <div>
            <div className="trackWrapper">
                <div className="playButton"></div>
                <div className="trackInfo">
                    <h3>Number Zero</h3>
                    <p>Code by Siori Kitajima / 2020, Music by<br/> Joseph Minadeo "Number Zero - Prism"</p>
                </div>
            </div>
            <div className="numberBtns">
                <div onClick={props.sketchZero}>0</div>
                <div onClick={props.sketchOne}>1</div>
                <div onClick={props.sketchTwo}>2</div>
            </div>
            <div className="width400"></div>
        </div>
    );
}

export default SoothingOption;