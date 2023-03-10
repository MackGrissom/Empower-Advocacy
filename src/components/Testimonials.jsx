import brittany from '/src/assets/brittany.webp'
import Reviews from '/src/components/Reviews.jsx'
import bg from '/src/assets/images/background8.webp'
export default function Testimonials() {
  return (
    <>
{/* title of testimonials */}
{/* <div className="relative bg-indigo-800 mt-10 pt-0 " id='testimonials'>
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={bg}
          alt=""
        />
        <div className="absolute inset-0 bg-gn mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 mt-0">
        <h1 className="text-4xl font-bold tracking-tight text-beige sm:text-5xl lg:text-6xl">Client Testimonials</h1>
        <p className="mt-6 max-w-3xl text-xl text-white">
          Hear What Our Valued Clients Have To Say About Working With Us
        </p>
      </div>
    </div> */}









    <section className="overflow-hidden  mt-30 max-w-full " id='testimonials'>
      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-12 lg:px-8 ">
        <svg
          className="absolute top-full left-0 translate-x-80 -translate-y-24 transform lg:hidden"
          width={784}
          height={404}
          fill="none"
          viewBox="0 0 784 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gn" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={784} height={404} fill="" />
        </svg>

        <svg
          className="absolute right-full top-1/2 hidden translate-x-1/2 -translate-y-1/2 transform lg:block text-gn"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="56409614-3d62-4985-9a10-7ca758a8f4f0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
        </svg>

        <div className="relative lg:flex lg:items-center b">
          <div className="hidden lg:block lg:flex-shrink-0">
            <img
              className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
              src={brittany}
              alt=""
            />
          </div>

          <div className="relative lg:ml-10">
            <svg
              className="absolute top-0 left-0 h-20 w-20 -translate-x-8 -translate-y-24 transform text-indigo-200 opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth={2}
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <blockquote className="relative">
              <div className="text-l font-medium leading-9 text-gray-900 mt-8">
                <p>
                There are not enough words to describe how amazing Katie is at her job. She taught us how to advocate for our son, the ins and outs of an IEP, and how to be the voice for our child in the education system. We are now confident going into our  son???s IEP meetings because we understand the process clearly, and we know what is right vs wrong. Katie is not only amazing at her job, but she is loyal and trustworthy. We are honored to have Katie by our side for any future educational needs for our child."
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 lg:hidden">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 lg:ml-0">
                    <div className="text-base font-medium text-gray-900">Brittany Phan</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
    <Reviews />
    </>
  )
}