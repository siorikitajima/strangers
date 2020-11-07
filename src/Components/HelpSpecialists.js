import React from 'react';

function HelpSpecialists() {
    return(
        <div className="helpContainer">
            <h3>Addiction / Compulsive Behaviours</h3>
            <p className="helpList">
                <span>WE CARE Community Services</span><br/>
                WE CARE provides support for all forms of addictions including drugs, alcohol, and compulsive behaviours like problem gambling, compulsive sex behaviours & porn use, overeating, problematic internet use & excessive gaming and shoplifting. We take a holistic approach to help people live an addiction-free life. We offer evidence-based counselling and therapy group work. WE CARE is also a community-based drop-in centre where a safe, supportive and non-judgemental environment is provided for individuals to stabilise and work on their recovery.<br/>
                <a href="https://www.wecare.org.sg" rel="noopener noreferrer" target="_blank" className="helpBtn weburl">Website</a>
                <a href="mailto:help@wecare.org.sg" target="_blank" rel="noopener noreferrer" className="helpBtn email">E-mail</a>
                <a href="tel:3165-8017" target="_blank" rel="noopener noreferrer" className="helpBtn phone">3165 8017</a>
            </p>

            <h3>Eating Disorders</h3>
            <p className="helpList">
                <span>Singapore General Hospital</span><br/>
                The SGH Eating Disorders Programme had its humble beginnings in 2003. It is a dedicated treatment programme for the management of eating disorders such as Anorexia Nervosa, Bulimia Nervosa and Binge-Eating Disorder. The programme addresses the physical and psychosocial problems commonly associated with eating disorders through a holistic approach. Individuals will work closely with our multi-disciplinary team comprising of psychiatrists, psychologists, physicians, dietitians, medical social workers, family therapists, nurses, occupational therapists, art therapist and physiotherapist.<br/>
                <a href="https://www.sgh.com.sg/patient-care/specialties-services/Eating-Disorders-Programme" target="_blank" rel="noopener noreferrer" className="helpBtn weburl">Website</a>
                <a href="mailto:eatingdisorders@sgh.com.sg" target="_blank" rel="noopener noreferrer" className="helpBtn email">E-mail</a>
                <a href="tel:6321-4377" target="_blank" rel="noopener noreferrer" className="helpBtn phone">6321 4377</a>
                </p>
        </div>
    );
}

export default HelpSpecialists;