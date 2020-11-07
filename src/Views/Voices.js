import React, {useState, useEffect} from 'react';
import PostVoice from '../Components/PostVoice';
import Prismic from 'prismic-javascript'

function Voices() {
    const [posts, setPosts] = useState([]);
    
    //Prismic stuff
    const apiEndpoint = 'https://strangertest.cdn.prismic.io/api/v2';
    const Client = Prismic.client(apiEndpoint);

    useEffect(() => {
        const fetchData = async () => {
            const response = await Client.query(
            Prismic.Predicates.at('document.type', 'voices_quote')
            )
            if (response) {
                setPosts(response.results);
            }
        }
        fetchData();
    }, [])

    return(
        <div className="voices">
            <h1>&#47;&#47; Voices from Strangers &#47;&#47;</h1>

            <React.Fragment>
            <div className="voiceContainer">
            {
            posts.map(post => 
                <div key={post.uid} className="voice">
                    <h3>{post.data.quote[0].text}</h3>
                    <p className="byline">–{post.data.issue}</p>
                </div>
            )
            }
            </div>
            </React.Fragment>

            <PostVoice />
            
        </div>
    );
}

export default Voices;