import React from 'react';
import SoothingIcon from '../Components/SoothingIcon';
import DataTop from '../Components/DataTop';
import DataTabs from '../Components/DataTabs';
import DataSources from '../Components/DataSources';

function Data() {
    // const [key, setKey] = useState('overview');

    return(
        <div className="data">
            <DataTop/>
            <DataTabs/>
            <DataSources/>
            <SoothingIcon/>
        </div>
    );
}

export default Data;