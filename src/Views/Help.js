import React from 'react';
import SoothingIcon from '../Components/SoothingIcon';
import HelpTop from '../Components/HelpTop';
import HelpTabs from '../Components/HelpTabs';
import DataSources from '../Components/DataSources';

function Help() {

    return(
        <div className="data">
            <HelpTop/>
            <HelpTabs/>
            <DataSources/>
            <SoothingIcon/>
        </div>
    );
}

export default Help;