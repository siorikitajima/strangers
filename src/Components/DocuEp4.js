import React from 'react';
import Ep4Credit from '../Components/Ep4Credit';
import Gallery from "react-photo-gallery";

function DocuEp4() {
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
            <h2>Episode #4 Title</h2>
            <p className="dataText">
                <b>Episode 4 Synopsis here.</b> The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here. The episodic synopsis for each episode comes here.<br/>
                <b>Episode 4 "Episode1 title"</b> releasing on <b>December 30</b>, 2020 12:00 AM SGT
            </p>
            <Gallery photos={photos}/>
            <a href="#/help/alcohol-abuse">
            <div className="helpLink">
                Watch Online
            </div>
            </a>
            <Ep4Credit/>
        </div>
    );
}

export default DocuEp4;