import React from "react";
import styles from './BasicForm.module.css';
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

const {withFormik} = require('formik');


interface FormikInputs {
        name: string;
        email: string;
        subject: string;
        message: string;

        captchaDidVerify?: boolean;
        formDidSubmit?: false; //server responded with a 2xx
        errorDidOccur?: false; //responded with anything other than 2xx
        isWaiting?: false; //used to display Sending...  on the button until server response returns
    
}

interface Props {
    values: FormikInputs;
    errors: any;
    touched: any;
}

const basicForm:React.FC<Props> = (props) => {

    return (
        <Form className={styles.form}>
                                <Field
                                    className={styles.form_input}
                                    name="name"
                                    type="text"
                                    placeholder="Enter Your Full Name"
                                    style={{
                                        backgroundColor: props.touched["name"] && props.errors["name"] ? "#ff5252" : null
                                    }}
                                />
                                <Field
                                    className={styles.form_input}
                                    name="email"
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    style={{
                                        backgroundColor: props.touched["email"] && props.errors["email"] ? "#ff5252" : null
                                    }}
                                />
                                <Field
                                    className={styles.form_input}
                                    name="subject"
                                    type="text"
                                    placeholder="Subject"
                                    style={{
                                        backgroundColor: props.touched["subject"] && props.errors["subject"] ? "#ff5252" : null
                                    }}
                                />
                                <Field
                                    className={styles.form_textarea}
                                    name="message"
                                    component="textarea"
                                    placeholder="Enter Your Message Here!"
                                    style={{
                                        backgroundColor: props.touched["message"] && props.errors["message"] ? "#ff5252" : null
                                    }}
                                />
                                <div className={styles.form_button_space}>
                                    <div className={styles.form_button_box}>
                                        <button type="submit">Send</button>
                                    </div>
                                </div>
                            </Form>
    )
};



const formSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, "Please Supply Your Full Name")
        .required("Please Enter Your Full Name"),

    email: Yup.string()
        .email("Please Enter A Valid Email Address")
        .required("Please Enter A Valid Email Address"),

    subject: Yup.string()
        .min(1, "Please Enter A Subject")
        .required("Please Enter A Subject"),

    message: Yup.string()
        .min(1, "Please Supply A Message")
        .required("Please Supply A Message")
});

const formikForm = withFormik({
    mapPropsToValues: () => ({
        name: "",
        email: "",
        subject: "",
        message: ""
    }),
    handleSubmit: (formValues:FormikInputs, formikBag:any) => {
        console.log(formValues);
    },
    validationSchema: formSchema
})(basicForm);
export default formikForm;