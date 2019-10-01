import React, { useState, useEffect } from 'react'

import { IconButton } from 'office-ui-fabric-react'

import data from './static'

import './TreeList.css'

const TreeList = props => {
  const [treeData, setTreeData] = useState([data[0]])
  const [renderedTreeData, setRenderedTreeData] = useState([])

  useEffect(() => {
    const flattenedData = flattenTreeData()
    setRenderedTreeData(flattenedData)

    function flattenTreeData() {
      const arr = []

      if (treeData.length > 0) {
        treeData.forEach(item => {
          if (item.organizationalUnits.length > 0) {
            item.organizationalUnits.forEach(unit => {
              arr.push(unit)
            })
          }
        })
      }

      return arr
    }
  }, [treeData])

  return (
    <div id="rs-treeList-container">
      {treeData.length < 1 ? (
        <div>No data was found</div>
      ) : (
        <ul className="rs-treeList-list">
          {renderedTreeData.map(item => {
            return (
              <li className="rs-treeList-item" style={{ paddingLeft: (item.depth - 1) * 40 }} key={item.id}>
                <IconButton
                  className="rs-treeList-item-icon"
                  iconProps={{ iconName: item.isOpen ? 'OpenFolderHorizontal' : 'FolderHorizontal' }}
                  disabled={!item.hasChild && !item.userFilterEnabled}
                  onClick={() => _configureTreeData(item)}
                />
                <span className="rs-treeList-item-text">{item.name}</span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )

  function _configureTreeData(item) {
    setTreeData([...treeData, data[treeData.length]])
  }
}

export default TreeList
