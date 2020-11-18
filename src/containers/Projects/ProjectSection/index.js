import styles from './ProjectSection.module.css'

export const ProjectSection = props => {
  return <div className={styles.projectsContainer}>{props.children}</div>
}
