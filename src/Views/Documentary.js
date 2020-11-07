import React from 'react';
import DocuTabs from '../Components/DocuTabs';
import DocuPhotos from '../Components/DocuPhotos';
import DocuNotes from '../Components/DocuNotes';

function Documentary() {

    return(
        <div className="docu">
            <h1>&#47;&#47; Documentary Heading &#47;&#47;</h1>
            <DocuTabs/>
            <DocuNotes/>
            <DocuPhotos/>
        </div>
    );
}

export default Documentary;