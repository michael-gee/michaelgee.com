import React from 'react'
import PropTypes from 'prop-types'

import { Card, Icon, Image, Popup } from 'semantic-ui-react'

import IconButton from 'components/Buttons/IconButton'

import useNavigation from 'hooks/useNavigation'

import reactSVG from './react.svg'

const FeatureItem = props => {
  const { title, route, routeOpts, date, description } = props
  const { navigateTo } = useNavigation()

  // CSS from Homepage.css
  return (
    <Card>
      <Card.Content>
        <Image src={reactSVG} size="medium" />
      </Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{date}</Card.Meta>
      <Card.Content extra>{_renderCardIcons()}</Card.Content>
    </Card>
  )

  function _renderCardIcons() {
    return (
      <div className="rs-featureItem-cardIcons">
        {description ? (
          <Popup
            content={description}
            trigger={<Icon name="info circle" color="grey" size="big" />}
            position="bottom left"
          />
        ) : (
          <span />
        )}

        <IconButton onClick={_handleItemClick} customColor="primary" iconName="arrow right" />
      </div>
    )
  }

  function _handleItemClick() {
    navigateTo(route, routeOpts)
  }
}

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  routeOpts: PropTypes.object,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default FeatureItem
