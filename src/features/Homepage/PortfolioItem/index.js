import React from 'react'
import PropTypes from 'prop-types'

import { Card, Icon, Popup } from 'semantic-ui-react'
import IconButton from 'components/Buttons/IconButton'

import { useNavigation } from 'hooks/mg-hooks'

const PortfolioItem = props => {
  const { navigateTo } = useNavigation()

  // CSS from Homepage.css
  return (
    <Card>
      {/* <Card.Content>
        <Image src={} size="medium" />
      </Card.Content> */}
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>{props.date}</Card.Meta>
      <Card.Content extra>{_renderCardIcons()}</Card.Content>
    </Card>
  )

  function _renderCardIcons() {
    return (
      <div className="mg-portfolioItem-cardIcons">
        {props.description ? (
          <Popup content={props.description} trigger={<Icon name="info circle" size="big" />} position="bottom left" />
        ) : (
          <span />
        )}

        {props.route && <IconButton onClick={_handleItemClick} customColor="primary" iconName="arrow right" />}
      </div>
    )
  }

  function _handleItemClick() {
    navigateTo(props.route, props.routeOpts)
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
