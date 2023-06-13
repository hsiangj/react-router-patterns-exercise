import {useState} from 'react';
import {Link} from 'react-router-dom';


const ColorList = () => {
  const INITIAL_STATE = ['red','yellow','blue'];
  const [colors, setColor] = useState(INITIAL_STATE);

  return (
    <div>
      <h1>Welcome to the color factory</h1>
      
      {colors.map((color) => (
        <div key={color}>
          <Link to={`/colors/${color}`}>{color}</Link>
        </div>
      ))}
      
    </div>
  )
}

export default ColorList;