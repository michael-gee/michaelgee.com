export default {
  appContainer: 'reactSandboxAppContainer',

  navigation: {
    events: {
      navigateTo: 'navigateTo'
    },
    routePaths: {
      homepage: '/',
      counter: '/simple-hooks-counter',
      dataTable: '/react-table-v7',
      treeList: '/custom-tree-list'
    }
  },

  commands: {
    viewHomepage: 'ViewHomepageCommand',
    viewCounter: 'ViewCounterCommand',
    viewDataTable: 'ViewDataTableCommand',
    viewTreeList: 'ViewTreeListCommand'
  }
}
