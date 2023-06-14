import {useState} from 'react';
import {Link} from 'react-router-dom';
import './ColorList.css';

const ColorList = ({colors}) => {
 
  return (
    <div>
      <div className='ColorListHeader'>
      <h1>Welcome to the color factory</h1>
      
      <Link to="/colors/new">Add a color</Link>
      </div>

      <div className='ColorListBody'>
      {colors.map((color) => (
        <div>
          <Link to={`/colors/${color}`}>{color}</Link>
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default ColorList;