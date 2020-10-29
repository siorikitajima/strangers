import React from 'react';
import SoothingIcon from '../Components/SoothingIcon';
import DataTabs from '../Components/DataTabs';
import DataSources from '../Components/DataSources';

function Data() {

    return(
        <div className="data">
            <h1>&#47;&#47; Data and Resources &#47;&#47;</h1>
            <DataTabs/>
            <DataSources/>
            <SoothingIcon/>
        </div>
    );
}

export default Data;