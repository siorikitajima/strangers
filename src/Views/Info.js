import React from 'react';
import {
    Switch,
    Route,
    useParams
  } from "react-router-dom";

const infoData = [
    {id:0, slug:'depression', h1:'Depression / MDD', number: '16', body:'Persistently depressed mood or loss of interest in activities causing significant impairment in daily life. The most common mental disorder in Singapore.'},
    {id:1, slug:'bipolar', h1:'Bipolar', number: '62', body:'Episodes of mood swings ranging from depressive lows to manic highs. This disorder is characterised by depressive episodes and mania.'},
    {id:2, slug:'anxiety', h1:'Anxiety / GAD', number: '62', body:"Feelings of worry, anxiety, or fear that are strong enough to interfere with one's daily activities. They are often accompanied by other symptoms."},
    {id:3, slug:'ocd', h1:'OCD', number: '28', body:'Obsessive-Compulsive Disorder. The occurrence of obsessions, compulsive rituals or, both recurrent and persistent thoughts, impulses, or images that are experienced as intrusive and cause great anxiety.'},
    {id:4, slug:'alcohol-abuse', h1:'Alcohol Abuse', number: '28', body:'Recurrent alcohol use resulting in failure to fulfill major role obligations, or recurrent use in situations in which it is physically hazardous.'},
    {id:5, slug:'alcohol-dependence', h1:'Alcohol Dependence', number: '200', body:'Maladaptive pattern of alcohol use, leading to clinically significant impairment or distress, and the essential feature of which is a cluster of cognitive, behavioural and physical symptoms.'},
    {id:6, slug:'multiple-issues', h1:'Multiple issues', number: '100', body:'Comorbidity, presence of two or more of the above mental disorders in the same period. Symptoms often overlap and can be additive.'},
    {id:7, slug:'general', h1:'Mental health issues', number: '7', body:'A wide range of conditions that affect mood, thinking, and behavior. 1 in 7 people in Singapore has experienced mental issues, with only two of them seeking help.'}]

function Info() {
    return(
        <div className="info">
          <Switch>
            <Route path="/info/:id/:issue" children={<Issues/>}/>
          </Switch>
      </div>
    );
}

function Issues() {
    let { issue } = useParams();
    let { id } = useParams();
    return (
      <div>
        <h1> // {issue} // </h1>
        In React Router v5, You can use hooks to get parameters.
        <br />
        Current issue parameter is <strong>{issue}</strong>
        <br />
        The ID is <strong>{id}</strong>
      </div>
    );
  }

export default Info;