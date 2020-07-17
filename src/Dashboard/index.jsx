import React from 'react'
import Layout from './Layout/Layout'
import { Switch, Route, useRouteMatch} from 'react-router-dom';
import Landing from '../Dashboard/Landing/Landing';
import Orders from '../Dashboard/Orders/Orders';
import Sales from '../Dashboard/Sales/Sales';
import Merchant from './Merchants/Merchant';
import Product from './Product/Product';

function Dashboard() {
  const match = useRouteMatch();
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path={`${match.path}`} component={Landing} />
          <Route exact path={`${match.path}/orders`} component={Orders} />
          <Route exact path={`${match.path}/sales`} component={Sales} />
          <Route exact path={`${match.path}/merchants`} component={Merchant} />
          <Route exact path={`${match.path}/products`} component={Product} />
        </Switch>
      </Layout>

    </div>
  )
};

export default Dashboard;
