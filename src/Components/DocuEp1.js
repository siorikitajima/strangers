import React from 'react';
import Ep1Credit from '../Components/Ep1Credit';
import Gallery from "react-photo-gallery";

function DocuEp1() {
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
            <h2>Episode #1 Title</h2>
            <p className="dataText">
                <b>Episode 1 Synopsis here.</b> The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here.<br/>
                <b>Episode 1 "Episode1 title"</b> releasing on <b>December 9</b>, 2020 12:00 AM SGT
            </p>
            <Gallery photos={photos}/>
            <a href="#/help/alcohol-abuse">
            <div className="helpLink">
                Watch Online
            </div>
            </a>
            <Ep1Credit/>
        </div>
    );
}

export default DocuEp1;