import React, { useState } from 'react'

import { Icon } from 'office-ui-fabric-react'

import staticData from './static'

import './TreeList.css'

const TreeList = props => {
  const { data } = staticData
  const [treeData, setTreeData] = useState([data[0]])

  return <div id="rs-treeList-container">{_renderTreeList()}</div>

  function _renderTreeList() {
    if (treeData.length < 1) {
      return <div>No data was found</div>
    }

    if (treeData.length === 1) {
      return (
        <ul className="rs-treeList-list">
          {treeData[0].organizationalUnits.map(item => {
            return (
              <li className="rs-treeList-item">
                <Icon
                  className="rs-treeList-item-icon"
                  iconName={item.isOpen ? 'OpenFolderHorizontal' : 'FolderHorizontal'}
                />
                <span className="rs-treeList-item-text">{item.name}</span>
              </li>
            )
          })}
        </ul>
      )
    }
  }
}

export default TreeList
