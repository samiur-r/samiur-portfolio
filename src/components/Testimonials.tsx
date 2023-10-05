import React from 'react'
import Image from 'next/image'

const testimonials = [
  {
    body: 'Samiur truly excels in his field, demonstrating both expertise and dedication. His openness to feedback is commendable, ensuring that the end result meets the highest standards. Working with such a professional like Samiur is a refreshing experience. I appreciate his commitment to delivering quality work, and I will undoubtedly hire him again for future projects.',
    author: {
      name: 'Randy Esperben',
      handle: 'COO & Co-founder Nexus Clips',
      imageUrl: '/man.png'
    }
  },
  {
    body: 'We worked with Samiur from the early planning stages of our website, through launch and ongoing. He helped us to research the best technologies/solutions available and produced very high quality code. I would happily work with him again given the opportunity. Thank you!',
    author: {
      name: 'Dean Barrow',
      handle: 'Tech Lead, Different Dog',
      imageUrl: '/man.png'
    }
  },
  {
    body: 'Saimur, I want to thank you for the the hard work on our project and hoping we have the opportunity to work together again.',
    author: {
      name: 'Pam Long',
      handle: 'COO, Curotec',
      imageUrl: '/woman.png'
    }
  },
  {
    body: 'I was fortunate to have Samiur on my team of frontend developers . He knows his Vue ! ',
    author: {
      name: 'Mohammad Abudayyeh',
      handle: 'DevOps Lead, Gluu',
      imageUrl: '/man.png'
    }
  },
  {
    body: 'Samiur is a good problem solver, dedicated and conscientious developer; always stayed on top of the tasks at hand. Great communication and generally very pleasant person to work with. Will not hesitate to recommend this talent and looking for future engagement.',
    author: {
      name: 'Aanas Ali',
      handle: 'CEO, Devcurate',
      imageUrl: '/man.png'
    }
  },
  {
    body: 'Samiur is a very good developer on Node.js and React.js, i reached out to him and i got a very fast response time, Professional, and have good communication I recommend working with him as you get 100% for what you pay.',
    author: {
      name: 'Liran Ben',
      handle: 'Founder & CEO, Xiah Legends',
      imageUrl: '/man.png'
    }
  }
]

const Testimonials = () => {
  return (
    <section className="bg-[#0f3443] py-8">
      <div className="container max-w-4xl mx-auto">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center white">
          Testimonials
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        <div className="mx-auto mt-5 flow-root max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="-mt-8 mx-5 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      width={30}
                      height={30}
                      className="rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt="author"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
