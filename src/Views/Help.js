import React from 'react';
import SoothingIcon from '../Components/SoothingIcon';
import HelpTabs from '../Components/HelpTabs';
import DataSources from '../Components/DataSources';

function Help() {

    return(
        <div className="data">
            <h1>&#47;&#47; Find Help &#47;&#47;</h1>
            <HelpTabs/>
            <DataSources/>
            <SoothingIcon/>
        </div>
    );
}

export default Help;