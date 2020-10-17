import React, {useState} from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
// import {useTransition, animated} from 'react-spring';

function PostOption(props){
const [emailSent, setEmailSent] = useState(false);
    function handleChange() {
        // props.onChange(event.this.value);
        props.onChange(false);
    }

const QuoteSchema = Yup.object().shape({
    quote: Yup.string()
      .max(300, 'Max length is set as 300 characters')
      .required('Please fill in your quote'),
    issue: Yup.string()
      .required('Please select your issue'),
  });

// const [isSent, setIsSent] = useState(false);

// const isSentTransition = useTransition(isSent, null, {
//     from: { transform: 'translateY(110%)'},
//     enter: { transform: 'translateY(0%)'},
//     leave: { transform: 'translateY(110%)'},
// });

    return(
        <div className="postInput" id="formPanel">
            <h2>Leave your story for others</h2>
            <Formik
            initialValues={{
                quote: '',
                issue: '',
            }}
            validationSchema={QuoteSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                // alert(JSON.stringify(values, null, 2));
                // setIsSent(!isSent);
                emailjs.send(
                    "service_wibfxg9", //Email service as defined in EmailJS setting
                    "template_76jepvv", // Email template ID provided by EmailJS
                    {
                        quote_html: values.quote,
                        issue_html: values.issue,
                    },
                    "user_GJVnDS7vbw31lYWmcZT82" // EmailJS user ID
                  )
                  handleChange();
            }}
            >
            {({ errors, touched }) => (
            <Form>
                {/* <label htmlFor="quote">Quote</label> */}
                <Field className="quoteForm" id="quote" as="textarea" name="quote" placeholder="Message to otheres, your story, and/or thoughts. We may add it to the page to share to others. You will be 100% anonymous here." />
                <Field name="issue" component="select" className="issueSelect">
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
                </Field>
                <button className="quoteBtn" type="submit"></button>
            {errors.quote && touched.quote ? (
             <div className="errorMsg">{errors.quote}</div>
           ) : null}
            {errors.issue && touched.issue ? (
             <div className="errorMsg">{errors.issue}</div>
           ) : null}
            </Form>
            )}
            </Formik>

        {/* {
        isSentTransition.map(({ item, key, props}) =>
        item && 
        <animated.div 
        key={key} style={props}
        className="sentMsg">
            <h2>Message sent</h2>
        </animated.div>)
        } */}
        </div>
    );
}

export default PostOption;
