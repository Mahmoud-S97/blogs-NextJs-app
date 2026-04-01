import Head from "next/head";
import { Fragment, JSX } from "react";
import ContactForm from "@/components/contact/contact-form";


const ContactPage = (): JSX.Element => {
    return (
        <Fragment>
            <Head>
                <title>Contact Me</title>
                <meta name='description' content='Send me your messages!' />
            </Head>
            <ContactForm />
        </Fragment>
    )
}

export default ContactPage;