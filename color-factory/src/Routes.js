import {Switch, Route} from 'react-router-dom';

import ColorList from './ColorList';
import Color from './Color';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList />
      </Route>
      <Route exact path="/colors/:color">
        <Color />
      </Route>
    </Switch>
  )
}

export default Routes;