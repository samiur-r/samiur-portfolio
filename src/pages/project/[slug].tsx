import { GetStaticProps, GetStaticPaths } from 'next'
import { projects, Project } from 'content/projects'

interface ProjectPageProps {
  project: Project
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <div>
      <h1>{project.title}</h1>
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
