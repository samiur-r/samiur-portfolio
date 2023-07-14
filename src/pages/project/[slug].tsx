import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { projects, Project } from 'content/projects'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

interface ProjectPageProps {
  project: Project
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  const content = project.description.split('\n\n').map((paragraph) => (
    <p
      key={Math.random()}
      className="my-3"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      }}
    />
  ))

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [])

  return (
    <div>
      <Head>
        <title>Samiur</title>
        <meta name="description" content="Samiur" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:w-1/2 text-white min-h-screen sm:fixed gradient flex justify-center items-center">
        <div className="w-max flex justify-center items-start flex-col gap-5 p-5 shadow-xl">
          <h1 className="font-bold text-2xl text-center">{project.title}</h1>
          <p>
            <span className="font-semibold">Techs:</span> {project.tech}
          </p>
          <div className="sm:max-w-xl">{content}</div>
          <div className="flex gap-3">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#0f3443] py-4 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Live
              </a>
            )}
            <Link href="/#projects">
              <a className="rounded-full py-4 px-8 bg-white text-gray-900 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Back
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 relative sm:left-1/2 p-5 flex flex-col gap-20 py-20">
        {project.images &&
          project.images.length > 0 &&
          project.images.map((image) => (
            <Image
              key={Math.random()}
              src={image.url}
              width={image.width}
              height={image.height}
              objectFit="contain"
            />
          ))}
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      project
    }
  }
}

export default ProjectPage
