import { useRouteMatch } from 'react-router-dom'

import { dispatchNavigateEvent } from '../navigation/helpers'

import constants from '../constants'

const useAppCommand = commandName => {
  const { url } = useRouteMatch()

  const command = new commands[commandName](url)
  return command
}

class AppCommandBase {
  constructor(url) {
    this.url = url
  }

  execute(args) {}
  canExecute(args) {}
}

export class ViewHomepageCommand extends AppCommandBase {
  execute() {
    dispatchNavigateEvent(constants.navigation.routePaths.homepage)
  }
  canExecute() {
    return true
  }
}

export class ViewCounterCommand extends AppCommandBase {
  execute() {
    dispatchNavigateEvent(constants.navigation.routePaths.counter)
  }
  canExecute() {
    return true
  }
}

export class ViewDataTableCommand extends AppCommandBase {
  execute() {
    dispatchNavigateEvent(constants.navigation.routePaths.dataTable)
  }
  canExecute() {
    return true
  }
}

export class ViewTreeListCommand extends AppCommandBase {
  execute() {
    dispatchNavigateEvent(constants.navigation.routePaths.treeList)
  }
  canExecute() {
    return true
  }
}

const commands = {
  ViewHomepageCommand,
  ViewCounterCommand,
  ViewDataTableCommand,
  ViewTreeListCommand
}

export default useAppCommand
