import React from 'react';
import Img1in50 from '../Images/Data_1-in-50.png';
import WatchBanner from '../Components/WatchBanner';
import {IssueInfoData} from '../Components/IssueInfoData';

function ExploreBDD() {
    return(
        <div className="dataVizContainer">
            <h2>{IssueInfoData[8].h1}</h2>

            <img src={Img1in50} alt="data" className="dataVizImg"/>
            <div className="dataText">
            <p><span>1/{IssueInfoData[8].number}</span><br/> {IssueInfoData[8].location} has experienced <br/><b>{IssueInfoData[8].h1}</b> in their life.
            <br/>(Source: <a href="https://d1wqtxts1xzle7.cloudfront.net/44642525/rief2006.pdf?1460425769=&response-content-disposition=inline%3B+filename%3DThe_prevalence_of_body_dysmorphic_disord.pdf&Expires=1605406271&Signature=UIqh9Hl6UzUbpmrzxfP5zIHoogccnftSBP1u-013TntuFBJV0pwYy0kmJ7B-a5G8X83vEfsOXs81qFAVtHsxDmOEPQimYXKzOpA0OhfBlTtG8DdrC3bR8UzD-DhiyDvjljqEZHbwokcEaZtsKSXVrC-kJ6fu2DqWyTe1aOAslEKyektCtPWmM3qvxQ4fpIdfye~Umd-Dfynqp9U~F37CCoHBPpoUJZ1mzoFp5FB9wNI1l~c6Wn9zxWtBouQtlTWwcK3DlpBfTzHBclLjnASn5wLeD-WtK5xm2ywdMfTSEYc62thOgJCuMKuW1bOHGxC0Xf8NFkC9QNvrsKckudaIaQ__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA" target="_blank" rel="noopener noreferrer">Rief et al. 2006</a>; <a href="https://link.springer.com/article/10.1007%252Fs11199-010-9831-1" target="_blank" rel="noopener noreferrer">Boroughs et al. 2010</a>)</p>
            </div>

            <p className="infoText">{IssueInfoData[8].body} (Source: <a href={IssueInfoData[8].sourceurl} rel="noopener noreferrer" target="_blank">{IssueInfoData[8].source}</a>)</p>
            
            <p className="infoText">{IssueInfoData[14].body}</p>
            <a href="#/help/counselling">
            <div className="helpLink">
                Find Help
            </div>
            </a>

            <WatchBanner issue={"Body dysmorphic disorder"} ep={"1"} date={"9 Dec"} link={"../../documentary/ep1"} />
            
        </div>
    );
}

export default ExploreBDD;