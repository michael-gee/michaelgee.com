import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { RS_APP_CONTAINERS } from './constants/navigation'

import './index.css'

// import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById(RS_APP_CONTAINERS.default))

// registerServiceWorker();
