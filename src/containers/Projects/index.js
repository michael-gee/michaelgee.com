import { PageHead } from '../../components/PageHead'
import { ProjectSection } from './ProjectSection'
import { ProjectItem } from './ProjectItem'

export const Projects = props => {
  return (
    <>
      <PageHead
        title="Projects | Michael Gee"
        description="A list of Michael Gee's past and present code projects."
        url="https://www.michaelgee.com/projects"
      />

      <div className="page-content">{props.children}</div>
    </>
  )
}

Projects.ProjectSection = ProjectSection
Projects.ProjectItem = ProjectItem
