import React from 'react'
import katie from '/home/mackgrissom/code/MackGrissom/Empower-Advocacy/Empower-Advocacy/src/assets/images/katie.webp'
const About = () => {
    return (
        <div class="container my-24 px-6 mx-auto" id='about'>


            <section class="mb-32 text-gray-800 text-center lg:text-left ">
                <div class="block rounded-lg shadow-lg bg-white">
                    <div class="flex flex-wrap items-center">
                        <div class="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12 ">
                            <img
                                src={katie}
                                alt="Trendy Pants and Shoes"
                                class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg "
                            />
                        </div>
                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12 ">
                            <div class="px-6 py-12 md:px-12">
                                <h2 class="text-3xl font-bold mb-4 text-gn display-5">Hi I'm Katie,</h2>
                                <p class="text-gray-500 mb-12">
                                    I am the founder of Empower Advocacy. I'm also  a former special educator, a mom, and an advocate. I have a masters degree in collaborative special education from Auburn University. I worked in the school system as a teacher, special education administrator and as a response to intervention coordinator. I understand the procedures, rules and regulations and all the ins and outs of special education.
<br/> <br/>
                                    I understand how difficult it can be to navigate special education alone. I sat on the other side of the table for many years. After becoming a mom I realized how isolating and intimidating it must be for you on the other side. Schools often forget or don't take the time to fully explain the process. I know parents often feel they are being told what is happening instead of being an active participant in their child's IEP. I would love to help you learn the process, give you the tools to ask the right questions, and empower you to advocate for your child now and for the rest of their educational career.
                                </p>
                                <div class="mt-3 rounded-lg sm:mt-0">
            <button class="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gn">Contact Me</button>
          </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default About