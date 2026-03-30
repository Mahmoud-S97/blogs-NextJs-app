import { JSX } from "react";


const ContactForm = (): JSX.Element => {
    return (
        <section className="w-full min-h-screen">
            <h1 className="text-center text-4xl font-bold my-20">How can I help you?</h1>
            <div className="w-full h-full flex justify-center items-center">
                <form className="w-full h-auto mx-8 md:w-[50%] md:mx-auto p-8 rounded-lg bg-purple-200 dark:bg-gray-700/50">
                    <div className="flex flex-col md:flex-row items-center justify-between md:gap-4">
                        <div className="w-full md:w-1/2 flex flex-col">
                            <label className="text-md" htmlFor="email">Your Email</label>
                            <input className="w-full p-2 border bg-gray-100 dark:bg-gray-700/50 border-purple-200 mt-[5] rounded-md outline-purple-200" type='email' id='email' required />
                        </div>
                        <div className="w-full mt-6 md:mt-0 md:w-1/2 flex flex-col">
                            <label className="text-md" htmlFor="name">Your Name</label>
                            <input className="w-full p-2 border bg-gray-100 dark:bg-gray-700/50 border-purple-200 mt-[5] rounded-md outline-purple-200" type='text' id='name' required />
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center mt-6">
                        <label className="text-md" htmlFor="message">Your Message</label>
                        <textarea className="w-full p-2 border bg-gray-100 dark:bg-gray-700/50 border-purple-200 mt-[5] rounded-md outline-purple-200" id='message' rows={5}></textarea>
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