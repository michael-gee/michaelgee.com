import { Projects } from '../../containers/Projects'

import { currentProjects, previousProjects } from '../../containers/Projects/content'

export const ProjectsPage = () => {
  return (
    <Projects>
      <section>
        <h2 className="page-title">Current Projects</h2>
        <Projects.ProjectSection>
          {currentProjects.map(cp => {
            return (
              <Projects.ProjectItem
                id={cp.id}
                dates={cp.dates}
                imageProps={{ src: cp.imageSrc, alt: cp.imageAlt }}
                title={cp.title}
                description={cp.description}
                externalLinks={cp.externalLinks}
                key={cp.id}
              />
            )
          })}
        </Projects.ProjectSection>
      </section>

      <section>
        <h2 className="page-title">Past Projects</h2>
        <Projects.ProjectSection>
          {previousProjects.map(pp => {
            return (
              <Projects.ProjectItem
                id={pp.id}
                dates={pp.dates}
                imageProps={{ src: pp.imageSrc, alt: pp.imageAlt }}
                title={pp.title}
                description={pp.description}
                externalLinks={pp.externalLinks}
                key={pp.id}
              />
            )
          })}
        </Projects.ProjectSection>
      </section>
    </Projects>
  )
}

export default ProjectsPage
