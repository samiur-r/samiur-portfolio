import React from 'react'
import Image from 'next/image'

const services = [
  {
    title: 'Web Application',
    logo: '/services-webapp.svg'
  },
  {
    title: 'Mobile Application',
    logo: '/services-mobileapp.svg'
  },
  {
    title: 'Artificial Intelligence',
    logo: '/services-ai.svg'
  },
  {
    title: 'Consulting',
    logo: '/services-consulting.svg'
  }
]

const Services = () => {
  return (
    <section className="bg-[#0f3443] py-8">
      <div className="container max-w-6xl mx-auto mt-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center white">
          Services
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <div className="bg-gray-900 py-24 sm:py-32 shadow-2xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
              <div className="mx-auto w-full max-w-xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Building Innovative Solutions for Diverse Industries
                </h2>
                <div className="mt-6 text-lg leading-8 text-gray-300">
                  Specialized in a wide range of industries including SAAS,
                  E-commerce, FinTech, ERP, CRM, Real Estate, Marketplace,
                  Learning Management Systems (LMS), Logistics, Social Networks,
                  Healthcare, and more. I ensure:
                  <div className="mt-3 flex flex-col gap-2 font-semibold">
                    <p>- 100% Clean code and High quality </p>
                    <p>- 100% On-Time delivery </p>
                    <p>- 100% Client Satisfaction</p>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-x-6">
                  <a
                    href="#contact"
                    className="rounded-md gradient px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                {services.map((service) => (
                  <div key={service.title} className="flex gap-2 items-center">
                    <Image src={service.logo} width={80} height={80} />
                    <h3 className="font-semibold">{service.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
