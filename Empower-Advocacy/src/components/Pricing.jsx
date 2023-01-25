import React from 'react'
import { FaChalkboardTeacher, AiOutlineFileSearch, GiShakingHands, RiTeamLine, GrResources } from 'react-icons/all'

const services = [
    {
        name: 'Consultation',
        subtitle: 'Expert Guidance',
        description: "Navigating special education can be overwhelming. If you feel intimidated, confused, or unhappy with your child's experience in special education then please reach out for a free consult. We will listen to your story and give you professional advice on your next steps.",
        icon: <FaChalkboardTeacher />,
        price: "Free 30 Min Consultation",
    },
    {
        name: 'Record Review',
        subtitle: 'A comprehensive approach',
        description: "The first thing we like to do after our consultation is review your child's educational history. We will review eligibility reports, psychological reports, IEPS, progress reports, data, and all other items that are important to your child's history. This also includes any specific research for your individual case. We will then advise you on anything that is missing or could be improved.",
        icon: <AiOutlineFileSearch />,
        price: "$75/hr",
    },
    {
        name: 'Collaboration',
        subtitle: 'Teamwork Yeilds Results',
        description: "Working with us means you have a partner. Our goal is not only to support you in advocating for your child but to help you learn. We will help you understand the rules and regulations,  share ideas for appropriate IEP goals, draft communications to the school, and prepare for any upcoming meetings. We also hope to provide you with the confidence and knowledge to be your own advocate for your child.",
        icon: <GiShakingHands />,
        price: "$75/hr",
    },
    {
        name: 'Attend Meetings',
        subtitle: 'Represent Your Voice',
        description: "While we think it's important to prepare you to walk into your own meetings with confidence, we also understand that sometimes you need a partner in the room with you. We are happy to be your voice and make sure the team hears your ideas, thoughts, and concerns.",
        icon: <RiTeamLine />,
        price: "$100/hr {plus mileage 20 miles outside of 30028}",
    },
    {
        name: 'Resources',
        subtitle: 'what you need to know',
        description: "Do you want answers to common questions regarding the special education process? Do you want to advocate for yourself but need resources? Our resource page is a great place to start! All clients will get access to this page however if you do not feel you need an advocate these resources may be a great place to start. Send an email to katie@empoweradvocacygroup.com for access.",
        icon: <GrResources />,
        price: "$20 unlimited access",
    },





]

const Pricing = () => {
    return (


        <section class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div class="container mx-auto">
                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4">
                        <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <span class="text-primary mb-2 block text-lg font-semibold">
                                Our Services
                            </span>
                            <h2
                                class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                                >
                                What Do We Offer?
                            </h2>
                            <p class="text-body-color text-base">
                                Expertise. Collaboration. Support.
                            </p>
                        </div>
                    </div>
                </div>
                            {services.map((service) => (
                    <div class="-mx-4 flex align-middle h-full w-full">
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div
                                class="mb-8 rounded-[20px] bg-beige p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10"
                                >

                                {service.icon}
                                <div
                                    class="mb-8 flex items-center justify-center rounded-2xl w-full h-full" key={service.name}
                                >
                                </div>
                                <h4 class="text-dark mb-3 text-xl font-semibold">
                                    {service.name}
                                </h4>
                                <p class="text-body-color">
                                    {service.description}
                                </p>
                                <p class="text-black">
                                    {service.price}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>

    )
}

export default Pricing