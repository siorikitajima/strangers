import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PostOption(props){
    function handleChange() {
        props.onChange(false);
    }

    const QuoteSchema = Yup.object().shape({
    quote: Yup.string()
      .max(400, 'Max length is set as 400 characters')
      .required('Please fill in your quote'),
    issue: Yup.string()
      .required('Please select your issue'),
    })

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
                toast("Message Sent");
                await new Promise((r) => setTimeout(r, 1500));
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
                <Field className="quoteForm" id="quote" as="textarea" name="quote" placeholder="Type your message, your story or thoughts on mental health here and we may add it to this page. You will be 100% anonymous. (Max 400 characters)" />
                <Field name="issue" component="select" className="issueSelect">
                    <option value="" hidden >Select your issue</option>
                    <option value="mdd">MDD / Depression</option>
                    <option value="bipolar">Bipolar</option>
                    <option value="gad/anxiety">GAD / Anxiety</option>
                    <option value="ocd">OCD / Obessive Compulsive Disorder</option>
                    <option value="alcohol-abuse">Alcohol Abuse</option>
                    <option value="did">DID / Dissociative Identity Disorder</option>
                    <option value="bdd">BDD / Body Dysmorphic Disorder</option>
                    <option value="bpd">BPD / Borderline Personality Disorder</option>
                    <option value="ptsd">PTSD / Post Traumatic Stress Disorder</option>
                    <option value="psychosis">Psychosis</option>
                    <option value="eating-disorder">Eating Disorder</option>
                    <option value="schizophrenia">Schizophrenia</option>
                    <option value="other">Other mental health issue</option>
                    <option value="general">General mental health issue</option>
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

        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        />
        </div>
    );
}

export default PostOption;
