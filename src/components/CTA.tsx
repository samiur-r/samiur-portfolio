import React from 'react'

const CTA = () => {
  return (
    <section id="contact" className="container mx-auto text-center py-6 mb-12">
      <h2 className="w-full my-2 text-3xl font-bold leading-tight text-center text-white">
        Let&apos;s Build Something Extraordinary Together!
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
      </div>
      <h3 className="my-4 text-xl leading-tight">
        Unlock your digital potential with tailored solutions that captivate,
        engage, and drive results. Contact me today to discuss your project
      </h3>
      <a
        href="mailto:samiur.rahman.akif@gmail.com"
        className="inline-block mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        Book a call
      </a>
    </section>
  )
}

export default CTA
