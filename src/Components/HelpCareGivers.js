import React from 'react';

function HelpCareGivers() {
    return(
        <div className="helpContainer">
            <h3>Care Givers and Mental Health Care Providers</h3>
            <p className="helpList">
                <span>Caregivers Alliance Limited (CAL)</span><br/>
                Caregivers Alliance Limited (CAL) is a professional non-profit organisation in Singapore dedicated to meeting the needs of caregivers of persons with mental health issues through education, support networks, crisis support, tailored services and self-care enablement.<br/>
                <a href="https://www.cal.org.sg" rel="noopener noreferrer" target="_blank" className="helpBtn weburl">Website</a>
                <a href="mailto:general@cal.org.sg" target="_blank" rel="noopener noreferrer" className="helpBtn email">E-mail</a>
                <a href="tel:6460-4400" target="_blank" rel="noopener noreferrer" className="helpBtn phone">6460 4400</a>
                <br/>

                <span>Counselling and Care Centre</span><br/>
                Counselling and Care Centre (CCC) is a non-governmental, non-profit organisation dedicated in providing quality counselling and psychological counselling services, psychotherapy training and consultation to professionals in the mental health and social services. We believe and are dedicated to creating a safe space to sit with their pains and to hear their struggles, touching them with compassion and understanding to bring healing and renewed strength. The focus of therapy is to help our clients move forward in life and living by awakening and bringing forth their inner resources for growth, learning and renewed confidence.<br/>
                <a href="http://www.counsel.org.sg" target="_blank" rel="noopener noreferrer" className="helpBtn weburl">Website</a>
                <a href="mailto:info@counsel.org.sg" target="_blank" rel="noopener noreferrer" className="helpBtn email">E-mail</a>
                <a href="tel:6536-6366" target="_blank" rel="noopener noreferrer" className="helpBtn phone">6536-6366</a>
                <br/>

                </p>
        </div>
    );
}

export default HelpCareGivers;