import React from 'react';
// import WatchBannerGeneral from '../Components/WatchBannerGeneral';

function HelpSuicide() {
    return(
        <div className="helpContainer">
            <h3>Suicide Prevention</h3>
            <p className="helpList">
                <span>Samaritans of Singapore (SOS)</span><br/>
                SOS is a 24-hr suicide prevention hotline service, providing round the clock emotional support for people experiencing distress, contemplating or affected by suicide.<br/>
                <a href="https://www.sos.org.sg" rel="noopener noreferrer" target="_blank" className="helpBtn weburl">Website</a>
                <a href="mailto:pat@sos.org.sg" target="_blank" rel="noopener noreferrer" className="helpBtn email">E-mail</a>
                <a href="tel:1800-2214444" target="_blank" rel="noopener noreferrer" className="helpBtn phone">Toll-free hotline (24-hrs)</a>
                <br/>   
                </p>
                {/* <WatchBannerGeneral/> */}
        </div>
    );
}

export default HelpSuicide;