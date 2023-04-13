
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

// export default function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();


//     emailjs.sendForm('service_xc41irl', 'template_mi7rhqj', form.current, 'cClUurdH5EWkwTVSM')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };





//   return (

//  <div id='contact'>
//     <div className="relative bg-beige " >
      
//       <div className="absolute inset-0">
//         <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 bg-beige" />
//       </div>
//       <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5   ">
//         <div className="bg-gray-50 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 bg-beige">
//           <div className="mx-auto max-w-lg bg-beige ">
//             <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
//             <p className="mt-3 text-lg leading-6 text-gray-500">
//             If you'd like to book a free 30 minutes consultation, gain access to critical resources or have any general questions - please reach out below. We look forward to hearing from you!
//             </p>
//             <dl className="mt-8 text-base text-gray-500">
//               <div>
//                 <dt className="sr-only">Postal address</dt>
//                 <dd>
//                   <p>Based In Senoia, Georgia</p>
//                 </dd>
//               </div>
//               <div className="mt-6">
//                 <dt className="sr-only">Phone number</dt>
//                 <dd className="flex">
//                   <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
//                   <span className="ml-3">+1 (404)-421-3696</span>
//                 </dd>
//               </div>
//               <div className="mt-3">
//                 <dt className="sr-only">Email</dt>
//                 <dd className="flex">
//                   <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
//                   <span className="ml-3"><a href='mailto:katie@empoweradvocacygroup.com'>katie@empoweradvocacygroup.com</a></span>
//                 </dd>
//               </div>
//             </dl>
//             <p className="mt-6 text-sm text-gray-500">
//               Need A Professional Website?{' '}
//               <a href="https://www.mackgrissom.io" className="font-medium text-gray-700 underline">
//                 Contact Our Developer
//               </a>
//               .
//             </p>
//           </div>
//         </div>
//         <div className="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 bg-beige">
//           <div className="mx-auto max-w-lg lg:max-w-none">
//             <form className="grid grid-cols-1 gap-y-6 " ref={form} onSubmit={sendEmail}>
//               <div>
//                 <label htmlFor="full-name" className="sr-only">
//                   Full name
//                 </label>
//                 <input
//                   type="text"
//                   name="user_name"
//                   id="full-name"
//                   autoComplete="name"
//                   className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   placeholder="Full name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="sr-only">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   name="user_email"
//                   type="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   placeholder="Email"
//                 />
//               </div>
             
//               <div>
//                 <label htmlFor="message" className="sr-only">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                   placeholder="Message"
//                   defaultValue={''}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="submit"
//                   value='Send'
//                   className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-gn "
//                 />
                  
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div> 
//   )
// }

import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email using EmailJS
    emailjs.sendForm('service_xc41irl', 'template_mi7rhqj', e.target, 'cClUurdH5EWkwTVSM')
      .then((result) => {
        console.log(result.text);
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <>
    <div classname='bg'>
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-gn">Get in touch</h2>
      <div className='flex justify-between mb-2'>
            <p className="mt-3 ml-2 text-lg leading-6 text-gray-500 mb-3 align-left">
             If you'd like to book a free 30 minutes consultation, gain access to critical resources or have any general questions - please reach out below. We look forward to hearing from you!
             </p>

             <dl className="mt-1 text-base text-gray-500">
               <div className="mt-6">
                 <dt className="sr-only">Phone number</dt>
                 <dd className="flex">
                   <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                 <span className="ml-3">+1 (404)-421-3696</span>
                 </dd>
               </div>
               <div className="mt-3">
                 <dt className="sr-only">Email</dt>
                 <dd className="flex">
                   <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                   <span className="ml-3"><a href='mailto:katie@empoweradvocacygroup.com'>katie@empoweradvocacygroup.com</a></span>
                 </dd>
               </div>
             </dl>
             </div>
            
    <form onSubmit={handleSubmit} className="bg-beige p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="user_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="4"
        ></textarea>
      </div>
      <div className="flex items-center justify-end">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-gn" value='send'>
          Send
        </button>
      </div>
    </form>
    </div>
    <p className="mt-6 mb-5 text-xs text-gray-500">
               Need A Professional Website?{' '}
               <a href="https://www.mackgrissom.io" className="font-medium text-gray-700 underline">
                 Contact Our Developer
               </a>
               
             </p>
    </>
  );
};

export default Contact;





