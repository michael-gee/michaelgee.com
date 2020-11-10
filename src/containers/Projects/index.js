import Head from 'next/head'
import { ProjectItem } from './ProjectItem'

import { currentProjects, previousProjects } from './content'

import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <>
      {_renderHead()}

      <div className="page-content">
        <section>
          <h2 className="page-title">Current Projects</h2>
          <div className={styles.projectContainer}>
            {currentProjects.map(cp => {
              return (
                <ProjectItem
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
          </div>
        </section>

        <section>
          <h2 className="page-title">Past Projects</h2>

          <div className={styles.projectContainer}>
            {previousProjects.map(cp => {
              return (
                <ProjectItem
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
          </div>
        </section>
      </div>
    </>
  )

  function _renderHead() {
    return (
      <Head>
        <title>Projects | Michael Gee</title>
        <meta
          name="description"
          content="A list of Michael Gee's past and present code projects."
        />
        <meta property="og:title" content="Projects | Michael Gee" />
        <meta
          property="og:description"
          content="A list of Michael Gee's past and present code projects."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.michaelgee.com/projects" />
      </Head>
    )
  }
}
