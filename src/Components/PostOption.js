import React from 'react';

function PostOption(props){
    return(
        <div>
            <div className="postInput">
                <textarea placeholder="Leave your strangers story for others. We will read and might add it to this page. You will be 100% anonymos here."/>
                <input type="submit" value=""/>
            </div>
        </div>
    );
}

export default PostOption;