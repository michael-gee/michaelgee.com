import React, { useState } from 'react'

import { IconButton } from 'office-ui-fabric-react'

import staticData from './static'

import './TreeList.css'

const TreeList = props => {
  const [treeData, setTreeData] = useState([data[0].organizationalUnits])
  const { data } = staticData

  return <div id="rs-treeList-container">{_renderTreeList()}</div>

  function _renderTreeList() {
    if (treeData.length < 1) {
      return <div>No data was found</div>
    }

    return treeData.map((treeItem, index) => {
      return (
        <ul className="rs-treeList-list" key={`treeList-${index}`}>
          {treeItem.organizationalUnits.map(item => {
            console.log(item)

            return (
              <li className="rs-treeList-item" key={item.id}>
                <IconButton
                  className="rs-treeList-item-icon"
                  iconProps={{ iconName: item.isOpen ? 'OpenFolderHorizontal' : 'FolderHorizontal' }}
                  disabled={!item.hasChild && !item.userFilterEnabled}
                  onClick={() => _configureTreeData(index, item)}
                />
                <span className="rs-treeList-item-text">{item.name}</span>
              </li>
            )
          })}
        </ul>
      )
    })
  }

  function _configureTreeData(currentListIndex, item) {
    const currentItemIndex = treeData[currentListIndex].organizationalUnits.findIndex(
      treeDataItem => treeDataItem.uid === item.uid
    )
    item.isOpen = !item.isOpen

    treeData[currentListIndex].organizationalUnits[currentItemIndex] = item

    setTreeData(treeData)
  }
}

export default TreeList
