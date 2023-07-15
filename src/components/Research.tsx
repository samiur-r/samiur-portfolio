import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const publications = [
  {
    id: 1,
    title:
      'Towards News Authenticity: Synthesizing Natural Language Processing and Human Expert Opinion to Evaluate News',
    href: 'https://ieeexplore.ieee.org/document/10034750',
    description:
      'We worked with NLP and blockchain, where we tried to integrate both systems (Man & Machine). Blockchain served as the human verification component, while NLP served as the machine component.',
    journal: 'IEEE'
  }
]

const Research = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container max-w-4xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Research & Publications
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <div className="bg-white py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
              <div className="w-full lg:max-w-lg lg:flex-auto">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Cutting-Edge Research at the Intersection of AI, Quantum
                  Computing, and Blockchain
                </h2>
                <p className="my-6 text-lg leading-8 text-gray-600">
                  Explore the latest advancements, discoveries, and insights in
                  these transformative technologies as I unravel the mysteries
                  and potential of AI, quantum computing, and blockchain.
                </p>
                <Image
                  width={640}
                  height={544}
                  src="/research_banner.jpg"
                  alt="research"
                  className="rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="w-full lg:max-w-xl">
                <ul className="-my-8 divide-y divide-gray-100">
                  {publications.map((publication) => (
                    <li key={publication.id} className="p-8 border shadow-xl">
                      <dl className="relative flex flex-wrap gap-x-3">
                        <dt className="sr-only">Title</dt>
                        <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                          <a href={publication.href}>
                            {publication.title}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                          </a>
                        </dd>
                        <dt className="sr-only">Description</dt>
                        <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">
                          {publication.description}
                        </dd>
                        <dt className="sr-only">Journal</dt>
                        <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">
                          Journal: {publication.journal}
                        </dd>
                      </dl>
                      <div className="mt-8 flex items-center gap-x-6">
                        <a
                          href="#contact"
                          className=" flex gap-3 rounded-md gradient px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                          View Paper <ArrowRightIcon className="w-5 h-5" />
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
