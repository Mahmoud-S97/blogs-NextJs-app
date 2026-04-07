import { JSX, useEffect, useState } from "react";
import Notification from "../ui/notification";
import { useApp } from "@/hooks/app/useApp";


const ContactForm = (): JSX.Element => {

    const [formErrors, setFormErrors] = useState<string | null>(null);
    const { setMessageHandler } = useApp();

    const [formData, setFormData] = useState<Record<string, string> | null>(null);

    const setField = (fieldName: string, value: string): void => {
        setFormData((prevFormData: any) => ({ ...prevFormData, [fieldName]: value }));
    }

    const resetForm = () => setFormData(null);

    const sendMessageHandler = async (event: any) => {
        event.preventDefault();

        if (!formData) return;

        if (!formData.email ||
            !formData.email.includes('@') ||
            !formData.name ||
            formData.name.trim() === '' ||
            !formData.message ||
            formData.message.trim() === ''

        ) {
            // Simple overall error message for dev-mode
            setFormErrors('Please fill the fields properly!.');
            return;
        }

        if (formErrors) setFormErrors(null);

        setMessageHandler({
            title: 'Sending message...',
            body: 'Sending message, please wait for a moment. ',
            status: 'pending'
        });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error((result.error && result.message) || 'Something went wrong, please try again later.');
            }

            setMessageHandler({
                title: 'Success!',
                body: result?.message,
                status: 'success'
            });
            resetForm();
        } catch (error: any) {
            setMessageHandler({
                title: 'Error!',
                body: (error && error?.message) || 'Sending message failed!. ',
                status: 'error'
            });
        }
    }

    return (
        <section className="w-full min-h-screen">
            <h1 className="text-center text-4xl font-bold my-20">How can I help you?</h1>
            <div className="w-full h-full flex justify-center items-center">
                <form className="w-full h-auto mx-8 md:w-[50%] md:mx-auto p-8 rounded-lg bg-purple-200 dark:bg-gray-700/50" onSubmit={sendMessageHandler}>
                    {formErrors && <p className="text-center text-red-500 text-md font-semibold my-4">{formErrors}</p>}
                    <div className="flex flex-col md:flex-row items-center justify-between md:gap-4">
                        <div className="w-full md:w-1/2 flex flex-col">
                            <label className="text-md" htmlFor="email">Your Email</label>
                            <input className="w-full p-2 border bg-gray-100 dark:bg-gray-700/50 border-purple-200 mt-[5] rounded-md outline-purple-200" type='email' id='email' required value={formData?.email || ''} onChange={(e) => setField('email', e.target.value)} />
                        </div>
                        <div className="w-full mt-6 md:mt-0 md:w-1/2 flex flex-col">
                            <label className="text-md" htmlFor="name">Your Name</label>
                            <input className="w-full p-2 border bg-gray-100 dark:bg-gray-700/50 border-purple-200 mt-[5] rounded-md outline-purple-200" type='text' id='name' required value={formData?.name || ''} onChange={(e) => setField('name', e.target.value)} />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center mt-6">
                        <label className="text-md" htmlFor="message">Your Message</label>
                        <textarea className="w-full p-2 border bg-gray-100 dark:bg-gray-700/50 border-purple-200 mt-[5] rounded-md outline-purple-200" id='message' rows={5} required value={formData?.message || ''} onChange={(e) => setField('message', e.target.value)}></textarea>
                    </div>
                    <div className="w-full my-1 flex justify-center items-center mt-6">
                        <button className="w-1/2 px-2 py-2 text-sm rounded-full bg-purple-200 dark:bg-gray-700/50 hover:bg-purple-400 border border-purple-400 dark:border-purple-200 cursor-pointer transition duration-200">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm;