import React from 'react'
import Image from 'next/image'

const feItems = [
  { title: 'Typescript', img: '/skills-ts.svg' },
  { title: 'React', img: '/skills-react.svg' },
  { title: 'Next', img: '/skills-next.svg' },
  { title: 'TailwindCSS', img: '/skills-tailwindcss.svg' },
  { title: 'TensorFlow', img: '/skills-tensorflow.webp' },
  { title: 'OpenCV', img: '/skills-opencv.webp' }
]

const beItems = [
  { title: 'Node', img: '/skills-node.svg' },
  { title: 'Flask', img: '/skills-flask.svg' },
  { title: 'PostgreSQL', img: '/skills-postgresql.svg' },
  { title: 'MongoDB', img: '/skills-mongodb.svg' },
  { title: 'AWS', img: '/skills-aws.svg' },
  { title: 'Strapi', img: '/skills-strapi.svg' }
]

const Skills = () => {
  return (
    <section className="bg-[#0f3443] py-8">
      <div className="container max-w-6xl mx-auto">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center white">
          Skills
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <div className="bg-gray-900 py-24 sm:py-32 shadow-2xl">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-6">
              {feItems.map((item) => (
                <div
                  className="bg-white/5 p-8 sm:p-10 flex flex-col items-center gap-5"
                  key={item.title}
                >
                  <Image
                    className="max-h-12 w-full object-contain"
                    src={item.img}
                    alt="Transistor"
                    width={100}
                    height={100}
                  />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <div className="-mx-6 mt-10 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-6">
              {beItems.map((item) => (
                <div
                  className="bg-white/5 p-8 sm:p-10 flex flex-col items-center gap-5"
                  key={item.title}
                >
                  <Image
                    className="max-h-12 w-full object-contain"
                    src={item.img}
                    alt="Transistor"
                    width={100}
                    height={100}
                  />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
