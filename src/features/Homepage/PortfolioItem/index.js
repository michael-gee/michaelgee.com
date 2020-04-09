import React from 'react'
import PropTypes from 'prop-types'

import { Card, Icon, Popup } from 'semantic-ui-react'
import Button from 'components/Button'

import useNavigation from 'hooks/useNavigation'

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
          <Popup
            content={props.description}
            trigger={<Icon name="info circle" size="big" data-testid="desc-icon" />}
            position="bottom left"
            data-testid="item-desc"
          />
        ) : (
          <span />
        )}

        {props.pathname && (
          <Button
            variant="icon"
            icon="arrow right"
            onClick={_onItemClick}
            customColor="primary"
            data-testid="item-navBtn"
          />
        )}
      </div>
    )
  }

  function _onItemClick() {
    navigateTo(props.pathname)
  }
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string
}

export default PortfolioItem
