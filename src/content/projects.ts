/* eslint-disable import/prefer-default-export */

interface Project {
  id: number
  slug: string
  title: string
  href: string
  thumbnail: string
  tech: string
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'subscription-based-e-commerce',
    title: 'Subscription based e-commerce',
    href: '/project/different-dog',
    thumbnail: '/projects/different-dog/1.png',
    tech: 'React, TailwindCSS, BuilderIO, Node, AWS'
  },
  {
    id: 2,
    slug: 'real-state',
    title: 'Real State',
    href: '/project/boshamlan',
    thumbnail: '/projects/boshamlan/1.png',
    tech: 'Next, TailwindCSS, Node, PostgreSQL'
  },
  {
    id: 3,
    slug: 'saas',
    title: 'SAAS',
    href: '/project/devcurate',
    thumbnail: '/projects/devcurate/1.png',
    tech: 'Vue, Bootstrap'
  },
  {
    id: 4,
    slug: 'product',
    title: 'Product',
    href: '/project/plume',
    thumbnail: '/projects/plume/1.png',
    tech: 'Next, Styled Component, NetlifyCMS'
  },
  {
    id: 5,
    slug: 'blockchain-nlp',
    title: 'Blockchain & NLP',
    href: '/project/ethfakenews',
    thumbnail: '/projects/ethfakenews/1.png',
    tech: 'React, Solidity, Web3'
  },
  {
    id: 6,
    slug: 'venueQ',
    title: 'VenueQ',
    href: '/project/venueq',
    thumbnail: '/projects/venueq/1.png',
    tech: 'Next, TailwindCSS, Node, MongoDB'
  },
  {
    id: 7,
    slug: 'lms',
    title: 'LMS',
    href: '/project/lms',
    thumbnail: '/projects/lms/1.png',
    tech: 'Next, Material UI, Node, AWS, MySQL'
  },
  {
    id: 8,
    slug: 'web3',
    title: 'Web3',
    href: '/project/babyapesrescue',
    thumbnail: '/projects/babyapesrescue/1.png',
    tech: 'Next, Material UI, Web3'
  },
  {
    id: 9,
    slug: 'book-api',
    title: 'Book Api',
    href: '/project/booklist',
    thumbnail: '/projects/booklist/1.png',
    tech: 'Laravel'
  }
]

export type { Project }
export { projects }
