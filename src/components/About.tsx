import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="bg-[#0f3443] py-8">
      <div className="container max-w-6xl mx-auto mt-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center white">
          About Me
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <div className="flex flex-wrap">
          <div className="sm:w-1/2 p-6">
            <p className="text-gray-200 mb-8 text-lg">
              A passionate full-stack developer with a strong interest in the
              intersection of technology, research, and innovation. With
              expertise in both front-end and back-end development, I bring a
              holistic approach to creating dynamic and seamless web
              applications. Beyond coding, I actively contribute to the
              open-source community, sharing my knowledge and collaborating with
              others to drive positive change.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <Image src="/about_me-1.svg" width={387} height={281} />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <Image src="/about_me-2.svg" width={356} height={262} />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <p className="text-gray-200 mb-8 text-lg">
                Additionally, I enjoy exploring emerging technologies and their
                potential applications, particularly in the fascinating fields
                of Quantum Computing and AI. In my spare time, I write tech blog
                posts to share insights, tutorials, and latest trends. I am
                constantly driven by the desire to learn, grow, and leverage
                technology to solve complex problems and shape the future of
                digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
