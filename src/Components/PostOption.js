import React from 'react';

function PostOption(props){
    return(
        <div>
            <div className="postInput">
                <textarea placeholder="Leave your story for others. We will read it and may add it to this page. You will be 100% anonymous here."/>
                <select name="issues" id="issues">
                    <option value="" hidden >Select your issue</option>
                    <option value="mdd/volvo">MDD / Depression</option>
                    <option value="bipolar">Bipolar</option>
                    <option value="gad/anxiety">GAD / Anxiety</option>
                    <option value="ocd">OCD</option>
                    <option value="alcohol-abuse">Alcohol Abuse</option>
                    <option value="alcohol-dependence">Alcohol Dependence</option>
                    <option value="other">Other mental health issue</option>
                    <option value="morethanone">More than one issue</option>
                    <option value="noissue">No mental health issue</option>
                </select>
                <input type="submit" value=""/>
            </div>
        </div>
    );
}

export default PostOption;