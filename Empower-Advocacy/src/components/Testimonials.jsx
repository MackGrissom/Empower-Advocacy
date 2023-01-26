import school from '/home/mackgrissom/code/MackGrissom/Empower-Advocacy/Empower-Advocacy/src/assets/images/school.webp'

export default function Testimonials() {
  return (
    <div className="bg-white pt-16 lg:py-24">
      <div className="bg-gn pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
            <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
              <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src={school}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-m text-white">
                    We hired Katie when our daughter was in Special Needs Preschool after talking with her about a situation that arose that seemed strange. Immediately she advised us on what to do in the situation, and then we hired her to look over all of our kiddo’s educational records and attend our IEP meetings. Being a first time parent with a child with special needs, it is very overwhelming to navigate the education system and know and understand your rights. Katie has helped us get the services we need, the accommodations that are appropriate and she is so helpful at helping us understand why we may need something that the school is suggesting, etc.
<br/>
<br/>
                    Things finally got better once we as parents had a better understanding and we had the support of someone who knows the ins and outs of the law, and what we are entitled to ask for. We are so thankful to have Katie on our team, and also make sure to recommend her to anyone that we think can use her for any type of educational advocacy. Thanks Katie for making our lives “easier” when it comes to this! We’d be LOST without her!
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">Laura Lewis</p>
                  
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}