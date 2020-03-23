import React from 'react'
import PropTypes from 'prop-types'

import { Card, Icon, Popup } from 'semantic-ui-react'

import IconButton from 'components/Buttons/IconButton'

import useNavigation from 'hooks/useNavigation'

const PortfolioItem = props => {
  const { title, route, routeOpts, date, description } = props
  const { navigateTo } = useNavigation()

  // CSS from Homepage.css
  return (
    <Card>
      {/* <Card.Content>
        <Image src={} size="medium" />
      </Card.Content> */}
      <Card.Header>{title}</Card.Header>
      <Card.Meta>{date}</Card.Meta>
      <Card.Content extra>{_renderCardIcons()}</Card.Content>
    </Card>
  )

  function _renderCardIcons() {
    return (
      <div className="mg-portfolioItem-cardIcons">
        {description ? (
          <Popup content={description} trigger={<Icon name="info circle" size="big" />} position="bottom left" />
        ) : (
          <span />
        )}

        {route && <IconButton onClick={_handleItemClick} customColor="primary" iconName="arrow right" />}
      </div>
    )
  }

  function _handleItemClick() {
    navigateTo(route, routeOpts)
  }
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.string,
  routeOpts: PropTypes.object,
  date: PropTypes.string,
  description: PropTypes.string
}

export default PortfolioItem
