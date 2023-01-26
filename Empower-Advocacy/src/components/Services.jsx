import React from 'react'
import { FaChalkboardTeacher, AiOutlineFileSearch, GiShakingHands, RiTeamLine, GrResources } from 'react-icons/all'

import consultation from "/home/mackgrissom/code/MackGrissom/Empower-Advocacy/Empower-Advocacy/src/assets/images/consultation.webp"


import bg from '/home/mackgrissom/code/MackGrissom/Empower-Advocacy/Empower-Advocacy/src/assets/images/bg.svg'
const services = [
    {
        name: 'Consultation',
        subtitle: 'Expert Guidance',
        description: "Navigating special education can be overwhelming. If you feel intimidated, confused, or unhappy with your child's experience in special education then please reach out for a free consult. We will listen to your story and give you professional advice on your next steps.",
        icon: <FaChalkboardTeacher />,
        price: "30 Min / Free",
        priceClass: "'hidden'",
        href: 'contact',
    },
    {
        name: 'Record Review',
        subtitle: 'A comprehensive approach',
        description: "The first thing we like to do after our consultation is review your child's educational history. We will review eligibility reports, psychological reports, IEPS, progress reports, data, and all other items that are important to your child's history. This also includes any specific research for your individual case. We will then advise you on anything that is missing or could be improved.",
        icon: <AiOutlineFileSearch />,
        price: "$75/hr",
        priceClass: 'text-lg font-semibold leading-8 tracking-normal text-gray-500',
        href: 'contact',
    },
    {
        name: 'Collaboration',
        subtitle: 'Teamwork Yeilds Results',
        description: "Working with us means you have a partner. Our goal is not only to support you in advocating for your child but to help you learn. We will help you understand the rules and regulations,  share ideas for appropriate IEP goals, draft communications to the school, and prepare for any upcoming meetings. We also hope to provide you with the confidence and knowledge to be your own advocate for your child.",
        icon: <GiShakingHands />,
        price: "$75/hr",
        priceClass: 'text-lg font-semibold leading-8 tracking-normal text-gray-500',
        priceNote: "",
        href: 'contact',
    },
    {
        name: 'Attend Meetings',
        subtitle: 'Represent Your Voice',
        description: "While we think it's important to prepare you to walk into your own meetings with confidence, we also understand that sometimes you need a partner in the room with you. We are happy to be your voice and make sure the team hears your ideas, thoughts, and concerns.",
        icon: <RiTeamLine />,
        price: "$100/hr",
        priceClass: 'text-lg font-semibold leading-8 tracking-normal text-gray-500',
        priceNote: "(plus mileage 20 miles outside of 30028)",
        href: 'contact',
    },






]

import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const tabs = [
    {
      name: 'Consultation',
      features: [
        {
          name: 'Expert Guidance',
          description:
            "Navigating special education can be overwhelming. If you feel intimidated, confused, or unhappy with your child's experience in special education then please reach out for a free consult. We will listen to your story and give you professional advice on your next steps.",
          imageSrc: consultation,
          imageAlt: 'consultation',
          price: 'Free 30  Min Consultation',
          icon: <FaChalkboardTeacher />,
        },
      ],
    },
    {
      name: 'Record Review',
      features: [
        {
          name: 'A comprehensive approach',
          description:
            'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
          imageAlt:
            'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
        },
      ],
    },
    {
      name: 'Considerations',
      features: [
        {
          name: 'Helpful around the home',
          description:
            "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
          imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
        },
      ],
    },
    {
      name: 'Included',
      features: [
        {
          name: "Everything you'll need",
          description:
            'The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
          imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
        },
      ],
    },
  ]



const Pricing = () => {
    return (
//         <div className="" id='services'>
//             <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
//                 <div>
//                     <img
//                         className="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2 opacity-50"
//                         src={bg}
//                         alt=""
//                     />
//                 </div>
//                 <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
//                     <div className="mx-auto max-w-2xl lg:max-w-4xl">
//                         <h2 className="text-5xl font-semibold leading-8 text-beige">What Services Do We Offer? </h2>
//                         <p className="mt-2 text-4xl font-bold tracking-tight text-gn">
//                             Expertise. Collaboration. Support. <br className="hidden sm:inline lg:hidden" />

//                         </p>
//                         <p className="mt-6 text-lg leading-8 text-white">
//                             Empower Advocacy advocates for your child to receive the services they need to be successful in school. <br /> We teach parents the tools needed to successfully advocate for their child..
//                         </p>
//                     </div>
//                 </div>
//             </div>
//              <div className="flow-root pb-32 lg:pb-40">
//                 <div className="relative -mt-80 ">
//                     <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//                         <div className=" grid  grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-8 ">




// {/* 
//                             {services.map((service) => (
//                                 <div key={service.name} className="flex flex-col rounded-3xl bg-beige shadow-xl ring-1 ring-black/10 transform transition duration-500 hover:scale-110 hover:bg-white hover:text-gn hover:shadow-lg group pb-5">
//                                     <a href={service.href}>
//                                         <div className="p- sm:p-10 flip-card-inner">
//                                             <h3 className="text-2xl font-semibold leading-8 tracking-tight flip-card-front" id={service.id}>
//                                                 {service.icon}
                                                
//                                             </h3>
//                                             <h3 className="text-2xl font-semibold leading-8 tracking-tight text-gn" id={service.id}>
                                               
//                                                 {service.name}
//                                             </h3>
//                                             <h2 className="text-sm font-semibold font-italic leading-8 tracking-tight text-gray" id={service.id}>
//                                                 {service.subtitle}
//                                             </h2>
//                                             <p className="mt-6 text-md bold leading-7 text-gray-600 mb-5">{service.description}</p>
//                                             <p className="mt-6 text-md bold leading-7 text-black font-bold text-center mb-5">Price: &nbsp; {service.price}</p>
//                                             <div className="absolute right-[0]  text-xl font-semibold tracking-widest text-black uppercase transition-opacity transform   bg-opacity-75  bottom-0 rounded-xl  justify-center align-middle flex w-full top-4 flip-card-back">
                                                
//                                                 <a
//                                                     href={service.href}
//                                                     className="inline-block w-[70%] bottom-2 absolute rounded-lg bg-gn px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md  mt-10 p-10 hover:bg-black"
//                                                     aria-describedby={service.id}
//                                                 >
//                                                     Contact For Details
//                                                 </a>                                             

//                                             </div>

//                                         </div>
//                                     </a>
//                                 </div>
//                             ))} */}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="relative mx-auto mt-8 max-w-7xl px-6 lg:px-8">
//                     <div className="mx-auto max-w-md lg:max-w-4xl">
//                         <div className="flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gn bg-beige sm:p-10 lg:flex-row lg:items-center lg:gap-8">
//                             <div className="lg:min-w-0 lg:flex-1">
//                                 <h3 className="text-lg font-semibold leading-8 tracking-tight ">Resources</h3>
//                                 <div className="mt-2 text-base leading-7 text-gray-600">
//                                     Do you want answers to common questions regarding the special education process? Do you want to advocate for yourself but need resources? Our resource page is a great place to start! All clients will get access to this page however if you do not feel you need an advocate these resources may be a great place to start. <span className="font-semibold text-gray-900">$20 Unlimited Access</span>.
//                                 </div>
//                             </div>
//                             <div>
//                                 <a
//                                     href="#"
//                                     className="inline-block rounded-lg bg-gn px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white hover:bg-indigo-100 hover:bg-black"
//                                 >
//                                     Contact Us For Details &nbsp; &nbsp; <span aria-hidden="true">&rarr;</span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> 
            
        
//         </div>

    <div className="" id='services'>
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl sm:px-2 lg:px-8 py-20">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gn sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-gn text-sm">
            Expertise. Collaboration. Support.
            </p>
            <p className="mt-4 text-gray-500">
            Empower Advocacy advocates for your child to receive the services they need to be successful in school. <br /> We teach parents the tools needed to successfully advocate for their child..
            </p>
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <h3 className="text-lg font-medium text-gray-900"> {feature.icon}{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                        Price: {feature.price}
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                          <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}

export default Pricing