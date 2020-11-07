import React from 'react';
import HelpTabs from '../Components/HelpTabs';
import HelpPartners from '../Components/HelpPartners';

function Help() {

    return(
        <div className="help">
            <h1>&#47;&#47; Find Help &#47;&#47;</h1>
            <HelpTabs/>
            <HelpPartners/>
        </div>
    );
}

export default Help;