import { CheckIcon } from '@heroicons/react/20/solid'
import {FaChalkboardTeacher, AiOutlineFileSearch, GiShakingHands, RiTeamLine, GrResources} from 'react-icons/all'
const features = [
  {
    name: 'Consultation',
    subtitle:'Expert Guidance',
    description: "Navigating special education can be overwhelming. If you feel intimidated, confused, or unhappy with your child's experience in special education then please reach out for a free consult. We will listen to your story and give you professional advice on your next steps.",
    icon: <FaChalkboardTeacher/>,
    price: "Free 30 Min Consultation",
  },
  {
    name: 'Record Review',
    subtitle:'A comprehensive approach',
    description: "The first thing we like to do after our consultation is review your child's educational history. We will review eligibility reports, psychological reports, IEPS, progress reports, data, and all other items that are important to your child's history. This also includes any specific research for your individual case. We will then advise you on anything that is missing or could be improved.",
    icon: <AiOutlineFileSearch/>,
    price: "$75/hr",
  },
  {
    name: 'Collaboration',
    subtitle:'Teamwork Yeilds Results',
    description: "Working with us means you have a partner. Our goal is not only to support you in advocating for your child but to help you learn. We will help you understand the rules and regulations,  share ideas for appropriate IEP goals, draft communications to the school, and prepare for any upcoming meetings. We also hope to provide you with the confidence and knowledge to be your own advocate for your child.",
    icon: <GiShakingHands/>,
    price: "$75/hr",
  },
  {
    name: 'Attend Meetings',
    subtitle:'Represent Your Voice',
    description: "While we think it's important to prepare you to walk into your own meetings with confidence, we also understand that sometimes you need a partner in the room with you. We are happy to be your voice and make sure the team hears your ideas, thoughts, and concerns.",
    icon: <RiTeamLine/>,
    price: "$100/hr {plus mileage 20 miles outside of 30028}",
  },
  {
    name: 'Resources',
    subtitle:'what you need to know',
    description: "Do you want answers to common questions regarding the special education process? Do you want to advocate for yourself but need resources? Our resource page is a great place to start! All clients will get access to this page however if you do not feel you need an advocate these resources may be a great place to start. Send an email to katie@empoweradvocacygroup.com for access.",
    icon: <GrResources/>,
    price: "$20 unlimited access",
  },
  {
    name: 'Contact Me',
    subtitle:'what you need to know',
    description: "Do you want answers to common questions regarding the special education process? Do you want to advocate for yourself but need resources? Our resource page is a great place to start! All clients will get access to this page however if you do not feel you need an advocate these resources may be a great place to start. Send an email to katie@empoweradvocacygroup.com for access.",
    icon: <GrResources/>,
    price: "$20 unlimited access",
  },
  

  
  
]

export default function Services() {
  return (
    <div className=" py-24 pb-0 mb-0 sm:py-32 bg-beige">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Expertise. Collaboration. Support.</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            Empower Advocacy advocates for your child to receive the services they need to be successful in school. We teach parents the tools needed to successfully advocate for their child.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9 text-gn text-lg">
                <dt className="font-semibold text-gn">
                   {feature.icon} 
                  {feature.name}
                </dt>
                <span className='opacity-80 text-sm text-[black] italic'> {feature.subtitle}</span>
                <dd className="mt-2 text-sm text-black">{feature.description}</dd>
                <dd className="mt-2 text-sm text-[blue]">{feature.price}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
            }


