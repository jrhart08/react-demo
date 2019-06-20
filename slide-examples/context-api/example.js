/* eslint-disable */
import React from 'react'

// path/to/CurrentRoute.js
const CurrentRoute = React.createContext({ path: '/welcome' })

// App.js
export default function App() {
  return (
    <CurrentRoute.Consumer>
      {currentRoute =>
        <Breadcrumbs crumbs={parseRoute(currentRoute)} />
      }
    </CurrentRoute.Consumer>
  )
}
