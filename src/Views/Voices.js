import React, {useState, useEffect} from 'react';
import PostVoice from '../Components/PostVoice';
import SoothingIcon from '../Components/SoothingIcon';
import Prismic from 'prismic-javascript'

function Voices() {
    const [hideSoothing, setHideSoothing] = useState(false);
    const [posts, setPosts] = useState([])
    
    //Prismic stuff
    const apiEndpoint = 'https://strangertest.cdn.prismic.io/api/v2'
    const Client = Prismic.client(apiEndpoint)

    //Hiding Soothing Icon when Voice form is open.
    function handleChange(newValue) {
        setHideSoothing(newValue);
      }
    const hideSoothingIcon = ()=>{
        if(hideSoothing === true){
            return null
        } else {
            return <SoothingIcon value={hideSoothing} onChange={handleChange} />;
        }
      }

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
            <h1>// Voices from Strangers //</h1>

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

            <PostVoice
             value={hideSoothing} onChange={handleChange} 
             />
            {hideSoothingIcon()}
        </div>
    );
}

export default Voices;