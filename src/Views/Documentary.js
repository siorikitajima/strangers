import React from 'react';
import DocuTabs from '../Components/DocuTabs';
import DocuNotes from '../Components/DocuNotes';

function Documentary() {

    return(
        <div className="docu">
            <h1>&#47;&#47; Documentary &#47;&#47;</h1>
            <DocuTabs/>
            <DocuNotes/>
        </div>
    );
}

export default Documentary;