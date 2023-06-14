import {Switch, Route, Redirect} from 'react-router-dom';
import {useState} from 'react';

import ColorList from './ColorList';
import Color from './Color';
import ColorForm from './ColorForm';

const Routes = () => {
  const INITIAL_STATE = {
    red: "#FF0000",
    yellow: "#FFFF00",
    blue: "#0000FF"
  };
  const [colors, setColor] = useState(INITIAL_STATE);

  const colorKeys = Object.keys(colors);

  const handleAdd = (newColorObj) => {
    setColor(colors => ({...newColorObj, ...colors}));
  }


  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList colors={colorKeys}/>
      </Route>
      <Route exact path="/colors/new">
        <ColorForm addColor={handleAdd}/>
      </Route>
       <Route exact path="/colors/:color">
        <Color colors={colors}/>
      </Route>
      <Redirect to="/colors" />
  
    </Switch>
  )
}

export default Routes;