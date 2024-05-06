/* eslint-disable import/prefer-default-export */

interface Project {
  id: number
  slug: string
  title: string
  href?: string
  thumbnail: string
  tech: string
  description: string
  images?: Array<{ url: string; width: number; height: number }>
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'code-flight',
    title: 'Personalized AI Coding Tutor',
    href: 'https://my.codeflight.io/',
    thumbnail: '/projects/code-flight/1.png',
    tech: 'Next 14, OpenAI, PostgreSQL, Stripe',
    description: `Code Flight guides each user through a tailored educational journey adapted to their goals, preferences, and existing skills. Here's how it works:

    1. Users take a discovery quiz to outline their objectives and learning style.<br /><br />
    
    2. Through the power of artificial intelligence, we build bespoke structured coding curricula adapted to individual needs.<br /><br />
    
    3. Each path features:<br />
       - Big-picture concept explanations with examples<br />
       - Interactive practice problems<br />
       - Capstone coding projects<br />
       - Up-to-date in-demand content<br /><br />
    
    But what really sets Code Flight apart is its personalization. No more one-size-fits-all courses. Just an educational experience precisely tailored to propel you towards coding mastery efficiently.
    `,
    images: [
      { url: '/projects/code-flight/2.png', width: 1920, height: 5181 },
      { url: '/projects/code-flight/3.png', width: 1920, height: 931 },
      { url: '/projects/code-flight/4.png', width: 1920, height: 14583 },
      { url: '/projects/code-flight/5.png', width: 734, height: 580 }
    ]
  },
  {
    id: 2,
    slug: 'subscription-based-e-commerce',
    title: 'Dynamic company portfolio',
    href: 'https://www.skeldus.com/',
    thumbnail: '/projects/skeldus/1.png',
    tech: 'Next 14, Strapi, Hubspot',
    description: `Leveraging the power of Next.js, we've built a fast, scalable, and highly responsive web application that ensures seamless navigation and optimal performance across all devices. To complement this, we integrated Strapi as our headless CMS, enabling dynamic content management and empowering the Skeldus team with the flexibility to update content effortlessly, in real-time.`,
    images: [
      { url: '/projects/skeldus/1.png', width: 1920, height: 6229 },
      { url: '/projects/skeldus/2.png', width: 1920, height: 2643 },
      { url: '/projects/skeldus/3.png', width: 1920, height: 2332 },
      { url: '/projects/skeldus/4.png', width: 1920, height: 3091 }
    ]
  },
  {
    id: 3,
    slug: 'subscription-based-e-commerce',
    title: 'Subscription based e-commerce',
    href: 'https://differentdog.com/',
    thumbnail: '/projects/different-dog/1.png',
    tech: 'React, TailwindCSS, BuilderIO, Node, AWS',
    description: `**Frontend with React.ts, Tailwind CSS, and Efficient State Management with Redux**\n\nBuilt with React.ts and Tailwind CSS, the frontend of this platform offers a visually stunning and user-friendly interface. With Redux for efficient state management, enjoy seamless data flow and enhanced performance, delivering a flawless user experience.\n\n**Robust Backend Powered by Node.js with Secure and Scalable AWS Infrastructure**\n\nExperience a robust backend powered by Node.js, ensuring high performance, scalability, and reliability. Coupled with the secure and scalable infrastructure of AWS, this platform offers seamless hosting, storage, and cloud services. Leverage the power of AWS to effortlessly handle the growing demands of your e-commerce business.\n\n**Effortless Content Management with Builder.io**\n\nBuilder.io empowers to effortlessly manage platform's content. Update and modify content with ease, keeping subscribers engaged with fresh and exciting offerings. Streamline your content management process for enhanced efficiency.`,
    images: [
      { url: '/projects/different-dog/2.png', width: 1920, height: 9111 },
      { url: '/projects/different-dog/3.png', width: 1920, height: 3856 }
    ]
  },
  {
    id: 4,
    slug: 'boshamlan',
    title: 'Boshamlan (Real State)',
    href: 'https://kw.boshamlan.com',
    thumbnail: '/projects/boshamlan/1.png',
    tech: 'Next, TailwindCSS, Node, PostgreSQL',
    description: `The Real Estate project is a dynamic and modern web application that leverages advanced technologies to deliver a seamless experience for users in the real estate industry. Built using **Next.ts**, **TailwindCSS**, **Zustand**, **Node.ts**, **PostgreSQL**, and a robust **payment gateway**, this project showcases cutting-edge development practices and offers a range of features to enhance the overall user experience.\n\nOne of the key highlights of this project is the comprehensive **admin panel**, which empowers administrators to efficiently manage the platform's various functionalities. From overseeing **user accounts** and **company profiles** to monitoring **subscriptions** and generating **reports**, the admin panel provides a centralized hub for streamlined operations.\n\nTo ensure secure access and **transactions**, the project incorporates a reliable **OTP** (One-Time Password) authentication system. This feature enhances the overall security of the platform and protects user data, offering peace of mind to both buyers and sellers.\n\nThe user-centric design extends to the inclusion of user accounts and company accounts. These personalized profiles allow individuals and organizations to showcase their listings, manage property information, and interact with potential buyers or lessees effectively.`,
    images: [
      { url: '/projects/boshamlan/1.png', width: 1366, height: 768 },
      { url: '/projects/boshamlan/2.png', width: 1080, height: 1080 }
    ]
  },
  {
    id: 5,
    slug: 'venueQ',
    title: 'VenueQ',
    thumbnail: '/projects/venueq/1.png',
    tech: 'Next, TailwindCSS, Node, MongoDB',
    description: `This dynamic web application built using **Next.js**, **Node.js**, and **MongoDB**, revolutionizes the way people search, rent, and book venues. Inspired by the Airbnb concept, my app provides a seamless experience for users who are looking to find and reserve unique venues for various occasions. With a user-friendly interface, visitors can easily search for venues based on their preferences, such as location, size, amenities, and availability.\n\nAspiring venue owners also benefit from the platform, as they can easily create and manage listings for their spaces. Through a secure registration process, owners can showcase their venues with detailed descriptions, high-quality images, and pricing information. This opens up opportunities for them to reach a wider audience and generate additional income by connecting with interested renters.`,
    images: [
      { url: '/projects/venueq/1.png', width: 1702, height: 4000 },
      { url: '/projects/venueq/2.png', width: 1298, height: 1478 },
      { url: '/projects/venueq/3.png', width: 239, height: 4000 },
      { url: '/projects/venueq/4.png', width: 1366, height: 767 }
    ]
  },
  {
    id: 6,
    slug: 'product',
    title: 'Product',
    href: 'https://www.plume.com/',
    thumbnail: '/projects/plume/1.png',
    tech: 'Next, Styled Component, NetlifyCMS',
    description: `This project utilizes **Next.ts**, **Netlify CMS**, and **Styled Components** to create a user-friendly website. It empowers owners to effortlessly update and personalize their online presence, allowing them to manage content with ease while ensuring optimal performance and a visually appealing design.`,
    images: [
      { url: '/projects/plume/1.png', width: 1366, height: 767 },
      { url: '/projects/plume/2.png', width: 1106, height: 2348 },
      { url: '/projects/plume/3.png', width: 615, height: 4000 }
    ]
  },
  {
    id: 7,
    slug: 'blockchain-nlp',
    title: 'Blockchain & NLP',
    thumbnail: '/projects/ethfakenews/1.png',
    tech: 'React, Solidity, Web3',
    description: `The **Blockchain** based Reputation System for Detecting and Classifying Fake News project integrated **NLP** and blockchain technologies. Using **React** and **Solidity**, we developed a user-friendly interface. NLP analyzed news articles for fake news detection, while blockchain served as a decentralized verification system. The project showcased the power of combining human and machine intelligence to combat misinformation.`,
    images: [
      { url: '/projects/ethfakenews/1.png', width: 1366, height: 767 },
      { url: '/projects/ethfakenews/2.png', width: 1920, height: 1080 },
      { url: '/projects/ethfakenews/3.png', width: 1366, height: 768 }
    ]
  },
  {
    id: 8,
    slug: 'saas',
    title: 'SAAS',
    href: 'https://www.devcurate.co/',
    thumbnail: '/projects/devcurate/1.png',
    tech: 'Vue, Bootstrap',
    description: `Devcurate is a **Vue.ts** based **SaaS** project that tackles interview scheduling challenges between hiring managers and candidates, especially in the hybrid working environment. By leveraging features like calendar integration and candidate availability tracking, Devcurate streamlines the process, saving time and effort. Experience the power of Devcurate and revolutionize your interview coordination today.`,
    images: [{ url: '/projects/devcurate/1.png', width: 1366, height: 767 }]
  },
  {
    id: 9,
    slug: 'lms',
    title: 'LMS',
    thumbnail: '/projects/lms/1.png',
    tech: 'Next, Material UI, Node, AWS, MySQL',
    description: `A powerful Learning Management System (LMS) created using Next.js, Node.js and AWS. This innovative platform revolutionizes the way educators manage courses and enables users to effortlessly enroll in their desired learning experiences. With seamless course creation, secure payment processing, and personalized learning features, this LMS empowers educators and learners alike.`,
    images: [
      { url: '/projects/lms/1.png', width: 1344, height: 2022 },
      { url: '/projects/lms/2.png', width: 375, height: 3525 },
      { url: '/projects/lms/3.png', width: 1920, height: 1080 },
      { url: '/projects/lms/4.png', width: 1990, height: 2056 }
    ]
  },
  {
    id: 10,
    slug: 'web3',
    title: 'Web3',
    href: 'https://apevolutionclub.com/',
    thumbnail: '/projects/babyapesrescue/1.png',
    tech: 'Next, Material UI, Web3',
    description: `In this project that combines the cutting-edge technologies of Next.js and Web3. By harnessing the potential of blockchain technology and integrating it seamlessly with Next.js, I have developed a groundbreaking website that brings decentralized functionality and enhanced user experiences to the forefront.`,
    images: [
      { url: '/projects/babyapesrescue/1.png', width: 1366, height: 768 },
      { url: '/projects/babyapesrescue/2.png', width: 1080, height: 1080 },
      { url: '/projects/babyapesrescue/3.png', width: 1106, height: 5070 }
    ]
  },
  {
    id: 11,
    slug: 'book-api',
    title: 'Book Api',
    thumbnail: '/projects/booklist/1.png',
    tech: 'Laravel',
    description: `The Book List Website is a **Laravel** based application with an admin panel that allows users to manage books using the **Google Books API**. It provides a user-friendly interface for browsing, searching, and discovering a wide range of books. The admin panel enables efficient book management, including adding, editing, and deleting books from the database. With advanced search functionality, users can easily find books by title, author, or genre.\n\nThis project leverages Laravel's robust framework and integrates with the Google Books API to offer a seamless experience for book enthusiasts. It combines an intuitive user interface, efficient book management, and access to an extensive library of books. Whether you're looking to organize your own collection or explore new reading materials, the Book List Website is the perfect platform for managing and discovering books.`,
    images: [{ url: '/projects/booklist/1.png', width: 1802, height: 2048 }]
  }
]

export type { Project }
export { projects }
