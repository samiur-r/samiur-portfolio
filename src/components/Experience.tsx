import React from 'react'
import Image from 'next/image'
import jobs from 'content/jobs'

const Experience = () => {
  return (
    <section className="bg-[#0f3443] py-8">
      <div className="container max-w-4xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center white">
          Experiences
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <ul className="divide-y divide-[#34e89e] mx-5">
          {jobs.map((job) => (
            <li key={job.id} className="flex py-6 sm:py-10">
              <div className="flex-shrink-0">
                <Image
                  width={80}
                  height={80}
                  src={job.logo}
                  alt="company-logo"
                  className="object-cover"
                />
              </div>
              <div className="ml-5 w-full max-w-3xl flex flex-col gap-3">
                <div className="flex flex-col md:flex-row justify-between">
                  <a
                    href={job.url}
                    className="font-bold text-xl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {job.company}
                  </a>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-300">{job.year}</p>
                    <p className="text-sm text-gray-300">{job.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{job.title}</p>
                <ul className="ml-5 list-disc tracking-wide text-sm leading-7">
                  {job.description.map((item) => (
                    <li key={job.id + Math.random()}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Experience
