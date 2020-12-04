import PropTypes from 'prop-types'

import { Card, Button, Icon, Popup } from 'semantic-ui-react'

import styles from './ProjectItem.module.css'

export const ProjectItem = props => {
  return (
    <Card className={styles.project}>
      <div className={styles.projectHeader} id={styles[props.id]}>
        <img src={props.imageProps.src} alt={props.imageProps.alt} className={styles.projectImg} />
      </div>

      <Card.Header>
        <div className={styles.projectTitle}>{props.title}</div>
      </Card.Header>

      <Card.Content style={{ border: 'none', padding: '4px 0 4px 4px' }}>
        <div className={styles.projectIconsContainer}>
          <div>
            <Button
              icon
              size="big"
              as="a"
              href={props.externalLinks.site}
              target="_blank"
              rel="noopener noreferrer"
              disabled={!props.externalLinks.site}
              className={styles.projectIcon}
              title="Website Link"
              aria-label={`${props.title} Website Link`}
            >
              <Icon name="linkify" style={!props.externalLinks.site ? { color: '#B5B5B5' } : {}} />
            </Button>

            <Button
              icon
              size="big"
              as="a"
              href={props.externalLinks.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              disabled={!props.externalLinks.sourceCode}
              className={styles.projectIcon}
              title="Source Code"
              aria-label={`${props.title} Source Code`}
            >
              <Icon
                name="github"
                style={!props.externalLinks.sourceCode ? { color: '#B5B5B5' } : {}}
              />
            </Button>
          </div>

          <Popup
            on="click"
            trigger={
              <Button
                icon
                size="big"
                className={styles.projectIcon}
                title="Description"
                aria-label={`${props.title} Description`}
              >
                <Icon name="info circle" />
              </Button>
            }
            position="top right"
            size="small"
          >
            <p className={styles.projectDesc}>{props.description}</p>
          </Popup>
        </div>
      </Card.Content>
    </Card>
  )
}

ProjectItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  externalLinks: PropTypes.shape({
    site: PropTypes.string,
    sourceCode: PropTypes.string
  })
}
