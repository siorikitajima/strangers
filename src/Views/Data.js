import React from 'react';
import SoothingIcon from '../Components/SoothingIcon';
import DataTop from '../Components/DataTop';
import Data1in7 from '../Components/Data1in7';
import DataMDD from '../Components/DataMDD';
import DataSources from '../Components/DataSources';

function Data() {
    return(
        <div className="data">
            <DataTop/>
            <Data1in7/>
            <DataMDD/>
            <Data1in7/>
            <DataMDD/>
            <Data1in7/>
            <DataMDD/>
            <DataSources/>
            <SoothingIcon/>
        </div>
    );
}

export default Data;