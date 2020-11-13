import React from 'react';
import Ep2Credit from '../Components/Ep2Credit';
import Gallery from "react-photo-gallery";
import Iframe from 'react-iframe';

function DocuEp2() {
    const photos = [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 4,
            height: 3
          },
          {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            width: 1,
            height: 1
          },
          {
            src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            width: 3,
            height: 4
          }
      ];

    return(
        <div className="epContainer">
            <h2>Episode #2 Title</h2>
            <p className="dataText">
                <b>Episode 2 Synopsis here.</b> The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here.<br/>
                <b>Episode 2 "Episode1 title"</b> releasing on <b>December 16</b>, 2020 12:00 AM SGT
            </p>
            <Gallery photos={photos}/>

            <Iframe url="https://player.vimeo.com/video/477453826"
                width="640"
                height = "360"
                display="initial"
                position="relative"
                allow="autoplay; fullscreen" allowfullscreen
                frameBorder="none"
                className = "embedVideoIframe"
                styles={{margin: "0", border: "none"}}/>
                
            {/* <a href="#/help/alcohol-abuse"> */}
            <div className="helpLink disable">
                Coming Soon on CNA
            </div>
            {/* </a> */}
            <Ep2Credit/>
        </div>
    );
}

export default DocuEp2;