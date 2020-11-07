import React from 'react';
import ExploreTabs from '../Components/ExploreTabs';
import ExploreSources from '../Components/ExploreSources';

function Explore() {

    return(
        <div className="explore">
            <h1>&#47;&#47; Data and Resources &#47;&#47;</h1>
            <ExploreTabs/>
            <ExploreSources/>
        </div>
    );
}

export default Explore;