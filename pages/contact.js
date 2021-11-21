import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Result =() =>{
    return(
        <p className="font-title text-mtitle text-xl ml-2">Sent, will get back to you soon</p>
    )
}

export default function ContactUs () {
    const form = useRef();
    const [result,showResult] = useState(false)
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_t5vrn65', 'template_dkre6c3', e.target, 'user_kAcBRxJzJJzBH4VinUC8X')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    };
    

    return (
        <div className="m-10 lg:ml-20 lg:mr-20">
            <form ref={form} onSubmit={sendEmail}>    
            <div className="bg-backgrounddark shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h3 className="text-2xl mb-8 text-mtitle font-title border-b pb-4">Contact Me</h3>                     
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <input 
                        type="text" 
                        className="py-2 px-4 outline-none w-full rounded-lg h-14 focus:ring-2 focus:ring-backgrounddark bg-background bg-opacity-80 text-text" 
                        placeholder="Name" 
                        name="name" />
                    <input 
                        type="email" 
                        className="py-2 px-4 outline-none w-full rounded-lg h-14 focus:ring-2 focus:ring-backgrounddark bg-background bg-opacity-80 text-text" 
                        placeholder="Email" 
                        name="email" />
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <textarea 
                    autoFocus={true}
                    type="text" 
                    className="p-4 outline-none w-full rounded-lg h-14 focus:ring-2 focus:ring-backgrounddark bg-background bg-opacity-80 text-text"  
                    placeholder="Subject" 
                    name="subject"/>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <textarea 
                    autoFocus={true}
                    className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-backgrounddark bg-background bg-opacity-80 text-text"  
                    placeholder="Message"
                    name="message" />
                </div>
                <div className="grid grid-cols-5 gap-8 mb-4 mt-8">
                    <button
                    type="submit" 
                    className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-title rounded-full text-text px-8 py-4 cursor-pointer">
                    Submit
                    </button>
                    <div className="float-right mt-6">
                    {result ? <Result/> : null}
                    </div>
                </div>
                <div class="text-right text-xl text-mtitle ml-2 font-title">-- Sakshi Nimje your Writer and Developer</div> 
            </div>
            </form>
        </div>
    )

}
