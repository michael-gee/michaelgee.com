import { dispatchNavigateEvent } from 'navigation/helpers'

import { RS_ROUTE_PATHS } from 'constants/navigation'

const useAppCommand = commandName => {
  const command = commandName ? new commands[commandName]() : { canExecute: false, execute: () => {} }
  return command
}

class AppCommandBase {
  execute(args) {}
  canExecute(args) {}
}

export class ViewHomepageCommand extends AppCommandBase {
  execute() {
    dispatchNavigateEvent(RS_ROUTE_PATHS.homepage)
  }
  canExecute() {
    return true
  }
}

export class ViewCounterCommand extends AppCommandBase {
  execute() {
    dispatchNavigateEvent(RS_ROUTE_PATHS.counter)
  }
  canExecute() {
    return true
  }
}

export class ViewDataTableCommand extends AppCommandBase {
  execute() {
    dispatchNavigateEvent(RS_ROUTE_PATHS.dataTable)
  }
  canExecute() {
    return true
  }
}

export class ViewTreeListCommand extends AppCommandBase {
  execute() {
    dispatchNavigateEvent(RS_ROUTE_PATHS.treeList)
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
