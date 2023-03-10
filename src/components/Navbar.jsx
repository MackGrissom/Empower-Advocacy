import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '/src/assets/images/logo.webp'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className=" shadow sticky top-0 z-50 bg-beige
        " id='#hero'>
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex flex-shrink-0 items-center">
                                    <a href='/'>
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                   </a>

                                   
                                    <a href='/'>
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src={logo}
                                        alt="Your Company"
                                    />
                                   </a>

                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gn hover:border-gray-300 hover:text-gray-700" */}
                                    <a href="/"
                                        className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900">
                                    
                                       Home
                                       </a>
                                    <a
                                        href="#services"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gn hover:border-gray-300 hover:text-gray-700"
                                    >
                                        Services
                                    </a>
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gn hover:border-gray-300 hover:text-gray-700"
                                    >
                                        Contact
                                    </a>
                                    <a
                                        href="#about"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gn hover:border-gray-300 hover:text-gray-700"
                                    >
                                       About
                                    </a>
                                    <a
                                        href="#testimonials"
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gn hover:border-gray-300 hover:text-gray-700"
                                    >
                                       Testimonials
                                    </a>
                                </div>
                            </div>
                            
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gn focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pt-2 pb-3">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gn hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Disclosure.Button
                                as="a"
                                href="/"
                                className="block border-l-4 border-gn bg-beige py-2 pl-3 pr-4 text-base font-medium text-gn"
                            >
                               Home
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#services"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gn hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                                Services
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#contact"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gn hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                               Contact
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#about"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gn hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                               About
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#testimonials"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gn hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            >
                               Testimonial
                            </Disclosure.Button>
                        </div>
                       
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
