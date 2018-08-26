import React from 'react'
import {render as Render} from 'react-dom'
import RoutesConf from './routes/index.js'
import {HashRouter, Route, Redirect} from 'react-router-dom'


Render(
  <HashRouter>
    <div>
      {RoutesConf.routes.map(item => <Route path={item.path} component={item.component} key={item.name}/>)}
    </div>
  </HashRouter>,
  document.getElementById('app')
)
