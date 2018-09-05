import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './../Dashboard/Dashboard'
import IndicatorList from './../Indicator/IndicatorList'
import IndicatorGroupList from './../IndicatorGroup/IndicatorGroupList'
import Admin from './../Admin/Admin'
import DataSourceList from './../DataSource/DataSourceList'

const Content = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/indicators' component={IndicatorList}/>
      <Route path='/indicator-groups' component={IndicatorGroupList}/>
      <Route path='/data-sources' component={DataSourceList}/>
      <Route path='/admin' component={Admin}/>
    </Switch>
  </main>
)

export default Content