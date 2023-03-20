import React from 'react'
import { FaChalkboardTeacher, AiOutlineFileSearch, GiShakingHands, RiTeamLine, GrResources } from 'react-icons/all'

import consultation from "/src/assets/images/consultation.webp"
import files from '/src/assets/images/files.webp'
import collaboration from '/src/assets/images/collaboration.webp'
import meeting from '/src/assets/images/meeting.webp'


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
          href: '#contact',
        },
      ],
    },
    {
      name: 'Record Review',
      features: [
        {
          name: 'A Comprehensive Approach',
          description:
          "The first thing we like to do after our consultation is review your child's educational history. We will review eligibility reports, psychological reports, IEPS, progress reports, data, and all other items that are important to your child's history. This also includes any specific research for your individual case. We will then advise you on anything that is missing or could be improved.",
          imageSrc: files,
          imageAlt:
            'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
            icon: <AiOutlineFileSearch />,
            price: "$75/hr",
            href: '#contact',
        },
      ],
    },
    {
      name: 'Collaboration',
      features: [
        {
          name: 'Teamwork Yeilds Results',
          description:
          "Working with us means you have a partner. Our goal is not only to support you in advocating for your child but to help you learn. We will help you understand the rules and regulations,  share ideas for appropriate IEP goals, draft communications to the school, and prepare for any upcoming meetings. We also hope to provide you with the confidence and knowledge to be your own advocate for your child.",
          imageSrc: collaboration,
          imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
          icon: <GiShakingHands />,
        price: "$75/hr",
        href: '#contact',
        },
      ],
    },
    {
      name: 'Attend Meetings',
      features: [
        {
          name: "Represent Your Voice",
          description:
          "While we think it's important to prepare you to walk into your own meetings with confidence, we also understand that sometimes you need a partner in the room with you. We are happy to be your voice and make sure the team hears your ideas, thoughts, and concerns.",
          imageSrc: meeting,
          imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
          icon: <RiTeamLine />,
          price: "$100/hr",
          href: '#contact',
        },
      ],
    },
  ]



const Pricing = () => {
    return (
    <div className=" mt-80 lg:mt-20" id='services'>
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl sm:px-2 lg:px-8 py-20">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gn sm:text-4xl ">
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
                        <br/>
                        <a href={feature.href}>
                        <button className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform  rounded-xl hover:bg-beige hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gn mt-10" >Contact Us</button>
                        </a>
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